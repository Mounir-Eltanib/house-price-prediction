from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    carpet_area_sqft: float = Field(gt=0)
    floor_num: float = Field(ge=0)
    bathroom: float = Field(ge=0)
    balcony: float = Field(ge=0)

    location_grouped: str
    Furnishing: str
    Transaction: str
    Ownership: str
    facing: str


class PredictionResponse(BaseModel):
    predicted_price: float