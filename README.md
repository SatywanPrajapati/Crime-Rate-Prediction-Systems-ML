A full-stack Machine Learning system that predicts **crime rates, estimated cases, and risk levels** across 38 districts of Bihar using historical IPC Crime SCRB data.

This project combines **data engineering, statistical analysis, machine learning, and deployment** into a real-world decision-support system for crime analysis and public safety.

---

##  Live Demo
 https://crime-rate-prediction-system-ml.onrender.com

---

##  Project Overview

Crime prediction is a critical problem in modern society, especially in regions with high population density and administrative complexity.

This system leverages **historical crime data (2018–2021)** to:
- Identify crime trends and hotspots
- Forecast district-level crime rates
- Assist in **data-driven decision making for safety and policy planning**

---

##  Key Features

-  Predicts **crime rate (per lakh population)**
-  Estimates **number of cases and population**
-  Classifies **risk level (Low / Medium / High)**
-  Covers **38 districts and 12 major crime categories**
-  Real-time prediction via web interface
-  Data-driven insights using visualization & analysis

---

##  End-to-End Pipeline

**The system follows a structured data science workflow:**

### 1. Data Collection
- Data sourced from official SCRB Bihar datasets
- Covers 2018–2021 across multiple crime categories

### 2. Data Cleaning & Preprocessing
- Handled missing and inconsistent entries
- Standardized district names and crime categories
- Feature encoding and normalization

### 3. Exploratory Data Analysis (EDA)
- Identified crime trends, hotspots, and anomalies
- Example insights:
  -  2019 had peak crime rate across districts
  -  2020 saw a sharp drop due to COVID-19 lockdown
  -  Crime distribution is highly region-specific (not uniform)

### 4. Model Training & Evaluation
Multiple models were evaluated:

| Model | MAE | MSE | R² Score |
|------|----|----|--------|
| SVM | 8.65 | 610.85 | 0.08 |
| KNN | 8.60 | 536.47 | 0.04 |
| MLP | 9.40 | 485.50 | 0.18 |
| Decision Tree | 2.78 | 83.64 | 0.85 |
| **Random Forest** | **2.19** | **50.99** | **0.90** |

 **Random Forest selected as best model** due to highest accuracy and lowest error

---

## Key Data Insights

- 🔹 Theft is the most frequent crime category
- 🔹 High-crime districts: Patna, Begusarai, Muzaffarpur
- 🔹 Strong correlation between violent crimes and serious offenses
- 🔹 Crime trends are time-sensitive and influenced by external events (e.g., COVID)

(These insights are derived from detailed visual analysis in the project report)

---

## Tech Stack

- **Programming:** Python  
- **Data Processing:** Pandas, NumPy  
- **Visualization:** Matplotlib, Seaborn  
- **Machine Learning:** Scikit-learn  
- **Model:** Random Forest Regression  
- **Backend:** Flask  
- **Frontend:** HTML, CSS  
- **Deployment:** Render  

---

## Application Screenshots

### 🔹 Input Page
<p align="center">
  <img src="assets/input.png" width="700">
</p>

### 🔹 Output / Prediction Result
<p align="center">
  <img src="assets/result.png" width="700">
</p>

---

## Project Structure
Crime_Rate_Prediction/
│── static/
│── templates/
│── assets/
│── model/
│── dataset/
│── app.py
│── requirements.txt
│── README.md


---

##  Real-World Use Cases

-  Public safety planning  
-  District-level crime comparison  
-  Policy making & resource allocation  
-  Identification of high-risk zones  

---

##  Challenges Faced

- Handling **unstructured PDF-based datasets**
- Data inconsistency (district names, categories)
- Missing values and incomplete records
- High-dimensional visualization complexity
- Validating real-world trends vs data anomalies

---

##  Future Scope

-  Expand to pan-India NCRB datasets  
-  GIS-based crime heatmaps  
-  Real-time data integration  
-  Mobile app version  
-  Smart alert system for risk zones  

---

## Author

**Satywan Prajapati**  
🎓 IIT Patna | Data Science & ML Enthusiast  

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
