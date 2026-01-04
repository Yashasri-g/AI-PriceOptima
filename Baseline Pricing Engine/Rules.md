# Baseline Pricing Engine — Summary Report

## Objective
Design and implement a rule-based baseline pricing engine that dynamically adjusts product prices using time-based and inventory-based rules, and evaluate its effectiveness by comparing revenue performance against static pricing.

---

## 1. Time-Based Pricing Rules

Applied rules to capture temporal demand variations:

- **Weekend Price Adjustment**  
  Increase prices during weekends to reflect higher customer footfall and demand.

- **Holiday / Festival Adjustment**  
  Increase prices during holidays and promotional periods to capture peak demand.

- **Seasonal Adjustment**  
  Increase prices during high-demand seasons and marginally reduce during low-demand seasons.

- **Low-Demand Discounting**  
  Apply small discounts during sustained low-demand periods to stimulate sales volume.

These rules ensure pricing reacts logically to temporal demand fluctuations and remain interpretable for business stakeholders.

---

## 2. Inventory-Based Pricing Rules

Inventory conditions were used to control pricing and manage inventory risk:

- **Low Stock Pricing Rule**  
  Increase prices when inventory levels are low to prevent premature stock-outs and capture incremental margin.

- **High Stock Discount Rule**  
  Reduce prices when inventory levels are high to improve stock turnover.

- **Overstock Clearance Rule**  
  Apply additional discounts when inventory exceeds optimal thresholds to reduce holding costs.

These rules emulate realistic retail inventory-driven pricing behavior and help balance revenue with operational constraints.

---

## 3. Rule-Based Price Generation

- A new column, `rule_price`, was created by copying the original price.
- Time-based and inventory-based rules were applied sequentially to `rule_price` to ensure logical interactions between adjustments.
- Execution was performed with safeguards to avoid data leakage and overwrite errors.
- All transformations were logged for auditability and reproducibility.

---

## 4. Revenue Comparison (Static vs Rule-Based)

| Pricing Strategy   | Total Revenue      |
|--------------------|--------------------:|
| Static Pricing     | 5.49 × 10⁸          |
| Rule-Based Pricing | 6.43 × 10⁸          |

---

## 5. Revenue Uplift Result

- Revenue Lift Percentage: **16.98%**

This uplift demonstrates the rule-based pricing engine consistently outperformed static pricing across the dataset and serves as a strong, interpretable baseline.

---

## 6. Rule Strategy Explanation

The overall strategy balances demand maximization and inventory efficiency by:

- Charging premium prices during high-demand periods (weekends, holidays, peak seasons).
- Encouraging faster inventory movement with discounts during low-demand or overstock situations.
- Preventing revenue loss due to premature stock depletion by increasing price during scarcity.

All rules were intentionally simple and business-realistic to provide transparency and make the baseline a robust comparator for advanced machine learning–based pricing models.



- The rule-based engine produced a notable revenue uplift (≈17%) versus static pricing, validating the value of dynamic, interpretable rules.
