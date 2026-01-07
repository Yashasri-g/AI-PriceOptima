# Model Evaluation Summary — PriceOptima Dynamic Pricing System

## Objective
Summarize the model evaluation workflow, results, and conclusions for PriceOptima. The evaluation follows industry-standard validation practices to ensure realistic performance estimates and safe price deployment.

- Chronological split used: models trained on historical data and evaluated on future records.
- This prevents data leakage and ensures evaluation reflects real-world performance.

Models Trained & Performance
Two tree-based regression models were trained to forecast product demand.

| Model     | RMSE | MAE  |
|-----------|------:|-----:|
| XGBoost   | 6.31  | 4.90 |
| LightGBM  | 5.11  | 3.72 |

- LightGBM showed superior predictive accuracy (lower RMSE and MAE) and was selected as the final ML model.


- Predicted demand from the ML model was converted into ML-driven price adjustments using a defined pricing policy and safety constraints (e.g., minimum margin, maximum allowed price change).
- These ML-generated prices were applied to the test dataset to simulate historical pricing behavior and quantify financial impact.

Revenue for each strategy was computed on the test set and compared.

Formula:
```
Revenue Lift (%) = ((ML Revenue − Static Revenue) / Static Revenue) × 100
```

- ML-based pricing achieved a **2.64% revenue uplift** over static pricing.

## Comparison to Baselines
- Benchmarked against:
  - Static pricing (baseline)
  - Rule-based pricing (baseline engine)
- Findings:
  - Rule-based pricing produced the largest uplift in historical simulation.
  - ML-based pricing consistently outperformed static pricing and provided a data-driven, adaptive approach.
  - ML uplift was moderate but statistically and operationally meaningful.

## Interpretation & Insights
- ML models successfully learned demand patterns and produced pricing adjustments that improved revenue without causing extreme price volatility.
- The moderate uplift suggests:
  - Further model tuning, richer features, and longer-horizon backtesting could yield additional gains.
  - Business constraints (profitability, brand rules) may limit aggressive price moves but help maintain safe, deployable recommendations.


The ML-driven pricing approach demonstrated reliable improvements over static pricing (2.64% uplift) and provides a scalable foundation for adaptive pricing. While the rule-based baseline achieved higher uplift in simulation, the ML solution is more extensible and can capture complex, non-linear relationships—making it suitable for continued development and live validation.

