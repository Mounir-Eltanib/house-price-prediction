  House Price Prediction



A complete Machine Learning web application for predicting house prices based on property characteristics.



The project covers the complete ML workflow, from data preprocessing and model training to a FastAPI backend and React frontend.



\---



\## 📌 Project Overview



This project uses a House Price dataset to build a regression model capable of predicting property prices.



The application consists of:



\-  Data preprocessing and cleaning

\-  Random Forest Regression model

\-  Model evaluation

\-  FastAPI backend

\-  React frontend

\-  REST API integration

\-  Git LFS for the trained model
_______________________________________

📊 Dataset

The project uses a House Price dataset containing property information such as:

* Location
* Carpet Area
* Floor
* Bathroom
* Balcony
* Furnishing
* Transaction type
* Ownership
* Facing
* And other property-related features
_________________________________________
 Data Preprocessing

The data preparation process includes:

* Handling missing values
* Cleaning numerical features
* Processing categorical features
* Encoding categorical variables
* Feature selection
* Numerical preprocessing
* Building a reusable preprocessing pipeline
________________________________________
🤖 Machine Learning Model

The project uses a Random Forest Regressor for house price prediction.

Model Evaluation

The model achieved the following results on the test set:

 Metric	Result
  MAE	874,823.38
  RMSE	2,050,501.86
  R²	0.8959
  
The R² score indicates that the model explains approximately 89.6% of the variance in the test data.
__________________________________________________
 FastAPI Backend
 
The backend provides a REST API for making predictions.
Main endpoint

  POST /api/predict

Example request:

{

&#x20; "carpet\_area\_sqft": 1000,

&#x20; "floor\_num": 5,

&#x20; "bathroom": 2,

&#x20; "balcony": 1,

&#x20; "location\_grouped": "thane",

&#x20; "Furnishing": "Semi-Furnished",

&#x20; "Transaction": "Resale",

&#x20; "Ownership": "Freehold",

&#x20; "facing": "East"

}

\------------------------------------------------------------

Example response:

{

&#x20; "predicted\_price": 13581039.68

}


API Documentation

When the backend is running, interactive API documentation is available at:

http://127.0.0.1:8000/docs

____________________________________________
⚛️ React Frontend

The frontend provides a user-friendly interface where users can enter property information and receive a predicted price.

The frontend communicates with the FastAPI backend through the prediction API.
___________________________________________
📁 Project Structure

house-price-prediction/

│

├── backend/

│   ├── app/

│   │   ├── api/

│   │   │   └── routes/

│   │   │       └── prediction.py

│   │   ├── schemas/

│   │   │   └── prediction.py

│   │   ├── services/

│   │   │   └── inference.py

│   │   └── main.py

│   │

│   ├── models/

│   │   ├── house\_price\_model.pkl

│   │   └── locations.json

│   │

│   └── requirements.txt

│

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── App.tsx

│   │   ├── App.css

│   │   └── main.tsx

│   ├── package.json

│   └── vite.config.ts

│

├── main.py

├── .gitignore

└── .gitattributes


\------------------------------------------------------------

 How to Run the Project

  1\. Clone the repository

  git clone https://github.com/Mounir-Eltanib/house-price-prediction.git

  cd house-price-prediction


  2\. Backend Setup

  Create a Python virtual environment:

  python -m venv venv

  Activate it on Windows:

    venv\\Scripts\\activate


  Install the required packages:

    pip install -r backend/requirements.txt


  Run the FastAPI server:

  uvicorn app.main:app --reload

  The API will be available at:

    http://127.0.0.1:8000

  3\. Frontend Setup

  Open another terminal:

    cd frontend
    
  Install dependencies:
    
    npm install

  Start the development server:
    
    npm run dev

  The frontend will normally be available at:
  
    http://localhost:5173
________________________________________
API Workflow

The prediction flow is:

Property Details

&#x20;     ↓

React Frontend

&#x20;     ↓

POST /api/predict

&#x20;     ↓

FastAPI

&#x20;     ↓

Preprocessing Pipeline

&#x20;     ↓

Random Forest

&#x20;     ↓

Predicted Price

&#x20;     ↓

React UI



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



Model Storage



The trained model is stored using Git Large File Storage (Git LFS) because of its large file size.



backend/models/house\_price\_model.pkl



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Data \& Repository Policy



The raw dataset is not included in this repository.



The repository excludes:



Raw CSV datasets

Python virtual environments

Node.js node\_modules

Local environment files

Generated build files



This keeps the repository clean and suitable for version control.



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



**echnologies Used**

&#x20;Machine Learning

* &#x20; Python
* &#x20; Pandas
* &#x20; NumPy
* &#x20; Scikit-learn
* &#x20; Random Forest
* &#x20; Joblib

&#x20; Backend

* &#x20; FastAPI
* &#x20; Uvicorn
* &#x20; Pydantic
* &#x20; Frontend
* &#x20; React
* &#x20; TypeScript
* &#x20; Vite
* &#x20; CSS

&#x20; Development Tools

&#x20;  Jupyter Notebook / Google Colab

&#x20;  Git

&#x20;  GitHub

&#x20;  Git LFS



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


**Author**

Mounir Mostafa , Youssef Mokhtar

GitHub:

https://github.com/Mounir-Eltanib 





