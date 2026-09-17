from fastapi import APIRouter
from app.schemas.prediction import PredictionRequest, PredictionResponse
from app.services.inference import predict_price


router = APIRouter(
    prefix="/api",
    tags=["Prediction"]
)


@router.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    price = predict_price(request.model_dump())

    return {
        "predicted_price": price
    }