from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import lightgbm as lgb

app = FastAPI()

# ✅ CORS (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load once at startup
# IMPORTANT: Use Booster format to avoid sklearn pickling issues
booster = lgb.Booster(model_file="priceoptima_lgbm_booster.txt")
feature_cols = joblib.load("priceoptima_feature_columns.pkl")


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/recommend-price")
def recommend_price(payload: dict):
    # 1) Normalize keys (React -> training style)
    keymap = {
        "Inventory_Level": "Inventory Level",
        "Units_Ordered": "Units Ordered",
        "Holiday_Promotion": "Holiday/Promotion",
        "Competitor_Pricing": "Competitor Pricing",
        "Demand_Forecast": "Demand Forecast",
        "date": "Date",
    }

    for k, v in list(payload.items()):
        if k in keymap:
            payload[keymap[k]] = v

    # 2) Basic derived fields if missing
    price = float(payload.get("Price", 0))
    discount = float(payload.get("Discount", 0))
    discount_pct = discount / 100.0

    payload.setdefault("discount_pct", discount_pct)
    payload.setdefault("Discounted_Price", price * (1 - discount_pct))
    payload.setdefault("price_after_discount", price * (1 - discount_pct))
    payload.setdefault("Revenue", price * float(payload.get("Units Sold", 0)))

    # Date-based defaults
    if "Date" in payload:
        try:
            d = pd.to_datetime(payload["Date"])
            payload.setdefault("day", int(d.day))
            payload.setdefault("month", int(d.month))
            payload.setdefault("year", int(d.year))
            payload.setdefault("day_of_week", int(d.dayofweek))
            payload.setdefault("is_weekend", int(d.dayofweek >= 5))
            payload.setdefault("is_holiday", int(payload.get("Holiday/Promotion", 0)))
        except Exception:
            pass

    # 3) Build X with correct schema
    X = pd.DataFrame([payload])
    X = X.reindex(columns=feature_cols, fill_value=0)

    # 4) Predict demand using Booster
    predicted_demand = float(booster.predict(X)[0])

    # 5) Pricing logic
    avg_demand_7d = float(payload.get("avg_demand_7d", 1))
    demand_ratio = predicted_demand / max(avg_demand_7d, 1e-6)

    base_price = price
    ml_price = base_price * (1 + 0.05 * (demand_ratio - 1))
    ml_price = max(0.8 * base_price, min(1.2 * base_price, ml_price))

    return {
        "predicted_demand": round(predicted_demand, 2),
        "recommended_price": round(ml_price, 2),
        "base_price": round(base_price, 2),
        "demand_ratio": round(demand_ratio, 3),
    }
