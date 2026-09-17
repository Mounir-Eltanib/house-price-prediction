from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.prediction import router as prediction_router


app = FastAPI(
    title="House Price Prediction API",
    description="Machine Learning API for predicting house prices",
    version="1.0.0"
)


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes
app.include_router(prediction_router)


@app.get("/")
def root():
    return {
        "message": "House Price Prediction API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }