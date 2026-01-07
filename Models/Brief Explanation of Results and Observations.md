# PriceOptima — ML Pricing Summary

The PriceOptima dynamic pricing system demonstrated that machine learning–based pricing can outperform static pricing strategies. In historical backtesting, the ML-driven approach produced a measurable revenue improvement while maintaining price stability and conservative adjustments.

- LightGBM was the best-performing demand-forecasting model, achieving lower RMSE and MAE than XGBoost.
- LightGBM’s superior accuracy confirms its suitability for demand forecasting in the PriceOptima pipeline.

- ML-based pricing achieved a **2.64% revenue uplift** over static pricing on the historical test set.
- Price adjustments were conservative: the model decreased prices slightly more often than it increased them, reflecting a demand-capture strategy rather than aggressive margin maximization.

- The conservative adjustment policy preserved price stability while improving overall revenue.
- This behavior helps capture demand without introducing extreme price volatility that could harm customer trust or margins.

- The rule-based pricing engine produced a larger uplift in the simulation; however:
  - Rule-based logic captured strong, interpretable temporal and inventory signals.
  - The ML approach is more extensible and data-driven, enabling finer-grained and adaptive pricing as more data and features are introduced.

The evaluation validates that machine learning can effectively support dynamic pricing in real-world retail settings. While the rule-based baseline remains a strong, interpretable comparator, the ML-driven solution offers a scalable foundation for continuous improvement and more sophisticated pricing orchestration.
