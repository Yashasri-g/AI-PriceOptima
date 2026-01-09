# **PriceOptima – AI-Driven Dynamic Pricing System**

## **Project Objective**

PriceOptima is an AI-powered dynamic pricing system designed to help retail businesses optimize product prices in real-time based on demand patterns, inventory levels, and market conditions. The objective of this project is to demonstrate how machine learning can be applied to improve pricing strategies, increase revenue, and support data-driven business decisions.

---

## **Project Description**

Retail businesses traditionally rely on static pricing strategies, which often fail to respond to real-time market demand, seasonal changes, or inventory fluctuations. PriceOptima addresses this challenge by combining historical sales analysis, demand forecasting, and machine learning models to recommend optimal prices dynamically.

The system accepts business signals such as base price, inventory level, and recent demand, predicts expected demand, and recommends a pricing adjustment within safe bounds.

---

## **Dataset Description**

Two Kaggle datasets were used for this project:

| Dataset                              | Description                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Retail Store Inventory Forecasting   | Contains daily store-level sales, inventory, demand forecasts, seasonality and regional trends.                                |
| Retail Markdown Optimization Dataset | Contains historical discount effectiveness, product attributes, competitor pricing, seasonality, and optimal discount signals. |

These datasets together enabled accurate demand modeling, price elasticity analysis, and realistic retail simulation.

---

## **Technologies Used**

| Layer               | Technologies                        |
| ------------------- | ----------------------------------- |
| Data Processing     | Python, Pandas, NumPy               |
| Machine Learning    | LightGBM, XGBoost                   |
| Backend API         | FastAPI                             |
| Frontend Dashboard  | React.js (Vite)                     |
| Model Serialization | Joblib                              |
| API Testing         | Postman, Swagger UI                 |

---

## **Model Development Summary**

### Feature Engineering Highlights

* Time-based features: Day, Month, Weekend, Season
* Demand lag features: 7-day rolling demand
* Inventory indicators: Low-stock and over-stock flags
* Price elasticity indicators

### Models Trained

| Model    | RMSE | MAE  | Revenue Lift |
| -------- | ---- | ---- | ------------ |
| XGBoost  | 6.31 | 4.90 | +2.64%       |
| LightGBM | 5.11 | 3.72 | +2.64%       |

**LightGBM was selected** as the final production model due to superior performance.

---

## **Backend Implementation (FastAPI)**

The backend provides a REST API for model inference.

### Endpoints

| Method | Endpoint         | Purpose                                        |
| ------ | ---------------- | ---------------------------------------------- |
| GET    | /health          | API health check                               |
| POST   | /recommend-price | Returns recommended price and predicted demand |

### Sample Response

```json
{
  "predicted_demand": 10.72,
  "recommended_price": 37.28,
  "base_price": 39.0,
  "demand_ratio": 0.12
}
```

The model output is processed using safety-bounded pricing logic to avoid extreme pricing shifts.

---

## **Dashboard Implementation (React.js)**

The frontend dashboard allows business users to:

* Input pricing signals
* Send live requests to FastAPI
* Visualize:

  * Recommended price
  * Predicted demand
  * Demand ratio
* Display raw JSON API response
<img width="550" height="500" alt="image" src="https://github.com/user-attachments/assets/9ca638da-5d2c-4dec-809c-880628df0eeb" />


The dashboard updates in real-time and provides a professional pricing control interface.

---



## **Key Outputs & Results**

| Pricing Strategy | Revenue         |
| ---------------- | --------------- |
| Static Pricing   | ₹108.45 Million |
| ML-Based Pricing | ₹111.32 Million |

**Revenue Lift Achieved: +2.64%**

This proves that AI-driven pricing can consistently outperform traditional static pricing.

---

## **Real-World Usage Scenario**

Retail managers can use PriceOptima to:

* Optimize product pricing daily
* Identify underperforming SKUs
* Adjust pricing during peak demand periods
* Prevent losses due to over-discounting

The system is directly deployable in retail chains, ecommerce platforms, and inventory management systems.

---

## **Conclusion**

PriceOptima successfully demonstrates how machine learning and modern web technologies can be combined to create a production-ready dynamic pricing engine. The system improves revenue, enhances business agility, and provides explainable pricing recommendations.

---

## **Future Enhancements**

* Integration with POS systems
* Reinforcement Learning-based pricing
* Multi-product portfolio optimization
* Real-time competitor price scraping
* Advanced analytics dashboard
