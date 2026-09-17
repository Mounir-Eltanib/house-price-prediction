import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    carpet_area_sqft: 1000,
    floor_num: 5,
    bathroom: 2,
    balcony: 1,
    location_grouped: "thane",
    Furnishing: "Semi-Furnished",
    Transaction: "Resale",
    Ownership: "Freehold",
    facing: "East",
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: ["carpet_area_sqft", "floor_num", "bathroom", "balcony"].includes(
        name
      )
        ? Number(value)
        : value,
    });
  };

  const predictPrice = async () => {
    setLoading(true);
    setError("");
    setPrediction(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const data = await response.json();
      setPrediction(data.predicted_price);
    } catch (err) {
      setError("Could not connect to the prediction server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🏠 House Price Predictor</h1>
        <p>Enter property details to predict its price</p>

        <div className="grid">
          <label>
            Carpet Area (sqft)
            <input
              type="number"
              name="carpet_area_sqft"
              value={form.carpet_area_sqft}
              onChange={handleChange}
            />
          </label>

          <label>
            Floor
            <input
              type="number"
              name="floor_num"
              value={form.floor_num}
              onChange={handleChange}
            />
          </label>

          <label>
            Bathroom
            <input
              type="number"
              name="bathroom"
              value={form.bathroom}
              onChange={handleChange}
            />
          </label>

          <label>
            Balcony
            <input
              type="number"
              name="balcony"
              value={form.balcony}
              onChange={handleChange}
            />
          </label>

          <label>
            Location
            <select
              name="location_grouped"
              value={form.location_grouped}
              onChange={handleChange}
            >
              <option value="thane">Thane</option>
            </select>
          </label>

          <label>
            Furnishing
            <select
              name="Furnishing"
              value={form.Furnishing}
              onChange={handleChange}
            >
              <option value="Furnished">Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </label>

          <label>
            Transaction
            <select
              name="Transaction"
              value={form.Transaction}
              onChange={handleChange}
            >
              <option value="Resale">Resale</option>
              <option value="New Property">New Property</option>
            </select>
          </label>

          <label>
            Ownership
            <select
              name="Ownership"
              value={form.Ownership}
              onChange={handleChange}
            >
              <option value="Freehold">Freehold</option>
              <option value="Leasehold">Leasehold</option>
            </select>
          </label>

          <label>
            Facing
            <select
              name="facing"
              value={form.facing}
              onChange={handleChange}
            >
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
          </label>
        </div>

        <button onClick={predictPrice} disabled={loading}>
          {loading ? "Predicting..." : "Predict Price"}
        </button>

        {prediction !== null && (
          <div className="result">
            <h2>Predicted Price</h2>
            <strong>
              ₹ {prediction.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </strong>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;