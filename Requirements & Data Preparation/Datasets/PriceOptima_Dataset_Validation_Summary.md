# Dynamic Pricing System — Requirements & Data Preparation
Milestone: Requirements & Data Preparation  
Objective: Validate datasets used for sales, inventory, pricing, and product master data to ensure suitability for dynamic pricing modeling.

---

## Overview

This milestone validates two selected Kaggle datasets for PriceOptima’s dynamic pricing modeling:

- Dataset 1: Retail Store Inventory Forecasting Dataset (Kaggle — Anirudh Chauhan)  
  Purpose: Sales and inventory analysis (store × product × day level)

- Dataset 2: Retail Markdown Optimization: Discounts and Sales (Kaggle — Arbaaz Tamboli)  
  Purpose: Pricing, discount strategy, and product master data

Both datasets have been cleaned, validated, and approved for modeling price elasticity, demand forecasting, inventory-aware pricing, and discount optimization.

---

## Dataset 1 — Retail Store Inventory Forecasting Dataset
Source: Kaggle — Anirudh Chauhan  
Purpose: Sales and Inventory Analysis

Initial Overview
- Records: Daily transactional data (store × product × date)
- Primary keys: Date, Store ID, Product ID

Key Columns
- Date (converted to datetime)
- Store ID, Product ID
- Category, Region
- Inventory Level, Units Sold, Units Ordered
- Price, Discount
- Demand Forecast
- Weather Condition
- Holiday / Promotion flag
- Competitor Pricing
- Seasonality indicators

Validation Summary
- Missing values: None detected
- Duplicates: None found
- Data types: Date converted to datetime; numeric & categorical types verified and corrected
- Outlier treatment: Price, demand, inventory, and sales outliers capped using percentile-based thresholds
- Logical consistency checks:
  - Inventory levels and sales: non-negative
  - Price values: positive
  - Promotion / holiday / season flags: valid values

Final status
- ✅ Cleaned, validated, and approved for modeling sales trends, inventory dynamics, demand forecasting, and inventory-aware pricing.

---

## Dataset 2 — Retail Markdown Optimization: Discounts and Sales
Source: Kaggle — Arbaaz Tamboli  
Purpose: Pricing, Discount Strategy, Product Master Data

Initial / Final Size
- Initial: 43,750 rows × 22 columns  
- Final: 43,400 rows × 22 columns (350 duplicate rows removed)

Key Columns
- Product_ID, Product_Name, Brand, Category
- Original_Price, Competitor_Price
- Markdown_1 … Markdown_4
- Historical_Sales, Sales_After_M1 … Sales_After_M4
- Stock_Level, Promotion_Type
- Customer_Ratings, Return_Rate
- Seasonality_Factor, Optimal_Discount

Validation Summary
- Missing values: No nulls found
- Duplicates: 350 duplicate rows identified and removed
- Data types: Numeric and categorical columns verified and corrected
- Outlier treatment: Extreme values in price, sales, stock, ratings, return rate, and discount fields capped using percentile thresholds
- Logical consistency checks:
  - Prices and sales quantities: non-negative
  - Customer ratings: within valid range
  - Discount and return rates: within percentage bounds

Final status
- ✅ Cleaned, validated, and approved for price-elasticity analysis and discount optimization.

---

## Credits
- Retail Store Inventory Forecasting Dataset — Kaggle (Anirudh Chauhan)  
- Retail Markdown Optimization: Discounts and Sales — Kaggle (Arbaaz Tamboli)
