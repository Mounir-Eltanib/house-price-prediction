from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import json

app = FastAPI(title="House Price Prediction API")

# Load model
model = joblib.load("house_price.pkl")

# Load locations
with open("locations.json", "r") as f:
    locations = json.load(f)


class HouseData(BaseModel):
    carpet_area_sqft: float
    floor_num: float
    bathroom: float
    balcony: float
    location_grouped: str
    Furnishing: str
    Transaction: str
    Ownership: str
    facing: str


@app.get("/")
def home():
    return {
        "message": "House Price Prediction API is running"
    }


@app.post("/predict")
def predict(data: HouseData):

    input_data = [[
        data.carpet_area_sqft,
        data.floor_num,
        data.bathroom,
        data.balcony,
        data.location_grouped,
        data.Furnishing,
        data.Transaction,
        data.Ownership,
        data.facing
    ]]

    prediction = model.predict(input_data)[0]

    return {
        "predicted_price": round(float(prediction), 2)
    }