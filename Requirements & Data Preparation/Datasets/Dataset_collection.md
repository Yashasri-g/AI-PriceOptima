# Dataset Collection — PriceOptima Dynamic Pricing System

This document describes the datasets selected for PriceOptima, the dynamic pricing system. Two Kaggle datasets have been chosen to cover sales, inventory, pricing, discounts, and product master data. A separate competitor pricing dataset is not required because competitor price information is already present in the selected pricing dataset.

---

## Selected Datasets

### 1) Sales & Inventory Dataset (Mandatory)  
**Dataset Name:** Retail Store Inventory Forecasting Dataset  
**Source:** Kaggle — Anirudh Chauhan

Key data features:
- Date — Daily transaction records  
- Store ID & Product ID — Unique identifiers  
- Category — Product categories (Electronics, Clothing, Groceries, etc.)  
- Region — Store geographic region  
- Inventory Level — Stock available at the beginning of the day  
- Units Sold — Units sold during the day  
- Demand Forecast — Predicted demand based on historical data  
- Weather Condition — External factor affecting demand  
- Holiday / Promotion Flag — Special sales indicators

Why this dataset is included:
- Fulfills both Sales and Inventory dataset requirements.
- Enables dynamic-pricing decisions using historical sales, demand patterns, inventory availability, regional effects, and external factors such as weather and holidays.

---

### 2) Pricing, Discounts & Product Master Dataset  
**Dataset Name:** Retail Markdown Optimization: Discounts and Sales  
**Source:** Kaggle — Arbaaz Tamboli

Key data features:
- Product_ID — Unique product identifier  
- Product_Name — Product name  
- Category — Product category  
- Brand — Brand information  
- Original_Price — Base product price  
- Competitor_Price — Market benchmark price  
- Historical_Sales — Sales before discounts  
- Markdown_1 to Markdown_4 — Discount levels  
- Sales_After_M1 to Sales_After_M4 — Sales after markdowns  
- Stock_Level — Available inventory  
- Promotion_Type — Promotion channel  
- Season / Seasonality_Factor — Seasonal demand impact  
- Customer_Ratings — Customer feedback  
- Return_Rate — Product return percentage  
- Optimal_Discount — Discount that maximizes sales

Why this dataset is included:
- Provides price elasticity and discount effectiveness.
- Contains competitor benchmark price (so no separate competitor dataset required).
- Supplies product master attributes (brand, category, ratings) useful for segmentation and model features.

---

## Relevance to PriceOptima

Together, these datasets provide comprehensive coverage of:
- Sales volume and timing (daily transactions)
- Inventory status and turnover signals
- Price, discount history, and competitor pricing benchmarks
- Product master data for segmentation (brand, category)
- External demand drivers (weather, holidays, seasonality)
This combination supports accurate price-optimization modeling while enabling operational constraints (inventory) and market-awareness (competitor price).

## Credits & Sources
- Retail Store Inventory Forecasting Dataset — Kaggle (Anirudh Chauhan)  
- Retail Markdown Optimization: Discounts and Sales — Kaggle (Arbaaz Tamboli)

(Download the datasets from Kaggle to access full metadata, sample files, and licensing details.)
