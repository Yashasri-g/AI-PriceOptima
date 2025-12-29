# Feature Engineering Summary Report
Project: PriceOptima — Dynamic Pricing System

### 1. Objective
The objective of feature engineering in PriceOptima is to transform raw sales, pricing, and inventory data into meaningful, predictive features that enable machine learning models to recommend optimal prices. Engineered features capture demand behavior, price sensitivity, inventory pressure, profitability, and temporal patterns essential for dynamic pricing decisions.

### 2. Dataset Overview
- Total records: 73,100  
- Total features: 65  
- Missing values: None  
- Duplicate records: None  
- Outliers: Treated using IQR-based capping  
- Scaling: Not applied (tree-based models planned)

### 3. Feature Engineering Categories

#### 3.1 Time-Based Features
Features to capture temporal demand patterns:
- Day, month, year
- Day of week
- Weekend indicator
- Season
- Holiday / promotion flag

These help models learn seasonality, weekday vs. weekend behavior, and festive demand variations.

#### 3.2 Price-Based Features
Features to model price dynamics and sensitivity:
- Lag prices (1-day, 7-day)
- Price change percentage
- Discount percentage
- Discounted price

These allow the model to evaluate how demand reacts to recent price changes and discounts.

#### 3.3 Demand Features (Lag & Rolling)
Features to capture demand trends and volatility:
- Lagged sales (1, 7, 30 days)
- Rolling average sales (7, 30 days)
- Demand volatility (7, 30 days)

These provide short-term and long-term demand signals essential for stable pricing decisions.

#### 3.4 Price Elasticity Features
Features quantifying demand sensitivity to price:
- Instantaneous price elasticity
- 7-day smoothed elasticity
- Average product-level elasticity
- Elasticity classification (High / Medium / Low)

Elasticity-based features enable differentiated pricing strategies for price-sensitive and price-inelastic products.

#### 3.5 Inventory Features
Supply-side constraint features:
- Inventory ratio
- Days until stock-out
- Low-stock indicator
- Overstock indicator

These allow the pricing system to increase prices during scarcity and apply discounts during overstock situations.

#### 3.6 Profitability Features
Features to ensure pricing decisions remain profitable:
- Profit per unit (estimated using competitor pricing)
- Profit margin
- Daily profit

These align pricing recommendations with business profitability KPIs.

#### 3.7 Interaction Features
Features to capture combined/contextual effects:
- Weekend × Price
- Season × Discount
- Inventory × Price
- Low-stock × Price

Interaction features help the model learn contextual pricing behavior.

#### 3.8 Categorical Encoding
Encoding strategies applied to categorical variables:
- One-hot encoding for low-cardinality features (category, region, season, weather, elasticity class)
- Frequency encoding for high-cardinality identifiers (product ID, store ID)

This ensures model efficiency without excessive dimensionality.

### 4. Final Cleaning & Validation
- Missing values introduced by lag and rolling computations were handled (imputation / trimming as appropriate).
- Duplicate records removed.
- Outliers capped using the IQR method.
- Final dataset validated to be fully consistent and model-ready.

