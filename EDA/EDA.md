# Exploratory Data Analysis (EDA) — PriceOptima Dynamic Pricing System

## 1. Objective
The objective of this EDA is to:
- Understand sales behavior and demand patterns
- Analyze price sensitivity (price elasticity)
- Identify factors influencing demand and profitability
- Support segmentation for dynamic pricing decisions
- Validate feature engineering outputs for modeling readiness

Focus: demand elasticity, inventory impact, discount effectiveness, and profitability drivers.

---

## 2. Dataset Overview
- Total records: 73,100  
- Total features: 65  
- Time period: 2022–2024  
- Granularity: Daily, store–product level

Data types:
- Numerical: prices, sales, inventory, profit metrics  
- Categorical (encoded): category, region, season, weather  
- Engineered features: lags, rolling stats, elasticity, interactions

Validation:
- No missing values  
- No duplicate rows  
- Outliers capped using IQR  
- Data ready for modeling

---

## 3. Key Variables Analyzed
- Demand: Units Sold, Demand Forecast, Lagged Sales  
- Price: Price, Discount %, Discounted Price, Lag Prices  
- Inventory: Inventory Level, Stock Flags, Days Until Stockout  
- Profitability: Profit per Unit, Profit Margin, Daily Profit  
- Elasticity: Price Elasticity, Elasticity Class  
- Temporal: Day, Month, Year, Weekend, Holiday  
- External Factors: Seasonality, Weather, Promotions

---

## 4. Sales & Demand Behavior

### 4.1 Units Sold Distribution
- Median daily sales ≈ 107 units  
- 75% of sales are below 203 units  
- Distribution is highly skewed with demand spikes

Insight: Sales variability indicates static pricing cannot handle demand fluctuations — dynamic pricing is needed.

### 4.2 Sales Trends Over Time
- Stable average sales across 2022–2024  
- Minor monthly variation  
- No major weekend or holiday sales spikes

Insight: Demand is relatively stable over time; pricing decisions drive revenue more than seasonality alone.

---

## 5. Pricing & Discount Analysis

### 5.1 Price Segments vs Demand
- Units sold remain relatively stable across price buckets
- Non-linear demand response observed

Insight: Simple linear pricing rules are insufficient; ML-based optimization is required.

### 5.2 Discount Impact
- Moderate discounts (10–15%) slightly improve sales  
- Very high discounts (15–20%) increase demand volatility

Insight: Over-discounting leads to unstable demand and margin erosion.

---

## 6. Inventory & Demand Interaction

### 6.1 Low Stock Impact
- Avg Units Sold:
  - Normal stock ≈ 154
  - Low stock ≈ 132

Insight: Low inventory directly limits demand regardless of price — include inventory constraints in pricing decisions.

### 6.2 Inventory Ratios
- Average inventory ratio ≈ 2.1 days  
- Overstock cases are rare

Insight: Most products operate close to stockout risk → dynamic pricing can help regulate demand.

---

## 7. Price Elasticity Analysis (Core Insight)

### 7.1 Overall Elasticity
- Mean elasticity: −2.66  
- Median elasticity: −2.98

Insight: Demand is highly price elastic — a 1% price increase results in ~2.6% demand drop on average.

### 7.2 Elasticity by Category
- Electronics: most price-sensitive  
- Toys and Furniture: less sensitive

Insight: Category-level pricing strategies are necessary.

### 7.3 Elasticity by Season & Region
- Highest elasticity in Winter  
- Southern region shows strongest sensitivity

Insight: Dynamic pricing must account for seasonality and geography.

### 7.4 Elasticity vs Inventory
- Low-stock products show higher elasticity

Insight: Carefully increasing prices during low stock can reduce demand volatility and prevent stockouts.

---

## 8. Profitability Analysis

### 8.1 Profit per Unit
- Average profit per unit ≈ 0  
- High variance across products

Insight: Margins are fragile; incorrect pricing can quickly create losses.

### 8.2 Elasticity Class vs Profit
- Medium elasticity products: average daily profit ≈ +17.15  
- Other classes: average daily profit ≈ −2.97

Insight: Medium-elasticity products are most profitable and should be prioritized for optimization.

---

## 9. Interaction Effects
- Weekend × Price: higher volatility  
- Season × Discount: significant effect on elasticity  
- Inventory × Price: strong influence on revenue

Insight: Pricing must be multi-dimensional; interaction features are validated.

---

## 10. Correlation Insights
- Weak linear correlations between elasticity and single features  
- Strong non-linear relationships present

Insight: Tree-based ML models (XGBoost, LightGBM) are appropriate for capturing complex interactions.

---

## 11. Key Business Takeaways
- Demand is generally price elastic.  
- Medium-elasticity products deliver the highest profit.  
- Inventory constraints strongly influence demand.  
- Over-discounting reduces profitability and increases volatility.  
- Context-aware pricing (season, region, stock) is essential.  
- Static pricing is suboptimal for this retail environment.

---

## Appendix
- Time period analyzed: 2022–2024  
- Granularity: daily, store × product  
- Engineered features: lags, rolling stats, elasticity, interaction terms
