from pathlib import Path
import joblib
import pandas as pd


MODEL_PATH = (
    Path(__file__).resolve().parents[2]
    / "models"
    / "house_price_model.pkl"
)

model = joblib.load(MODEL_PATH)


def predict_price(data: dict) -> float:
    input_data = pd.DataFrame([data])

    prediction = model.predict(input_data)[0]

    return float(prediction)