# Dataset Merge Decision — PriceOptima

## Overview
During data preparation for the PriceOptima dynamic pricing system, multiple retail datasets were collected to support sales, inventory, pricing, and discount analysis. After validation, a deliberate decision was made **not** to merge the two primary datasets directly.

## Datasets & Key Differences

- **Retail Store Inventory Forecasting Dataset** (Kaggle — Anirudh Chauhan)  
  - Product ID format: `P0001`, `P0002`, ... (alphanumeric)  
  - Focus: Daily sales, inventory levels, demand forecasting, and operational signals

- **Retail Markdown Optimization Dataset** (Kaggle — Arbaaz Tamboli)  
  - Product ID format: `1`, `2`, `3`, ... (numeric)  
  - Focus: Pricing strategy, discount effectiveness, price elasticity, and product master attributes

## Reason for Not Merging
- The two datasets use different product identifier formats and represent different retail domains.
- There is no common, reliable product identifier or proven mapping between the datasets.
- A forced or artificial mapping risks incorrect joins and data corruption.

## Design Decision
- Use the datasets independently but in a complementary fashion:
  - Treat the **Sales & Inventory** dataset as the core input for dynamic pricing and demand modeling (store-level, time-series models).
  - Use the **Markdown Optimization** dataset separately for price-elasticity analysis, discount-effectiveness studies, and product-level pricing strategy.

## Justification
- Preserves data integrity by avoiding unreliable joins.
- Prevents incorrect assumptions that could bias models or lead to faulty pricing recommendations.
- Reflects real-world data engineering best practices: prefer high-confidence merges or maintain separate analytic pipelines when identifiers do not align.

## Implications for Modeling
- Combine insights (not raw rows) across datasets:
  - Derive price-elasticity and optimal-discount rules from the markdown dataset and apply them as priors, features, or constraints in models trained on the sales–inventory dataset.
  - Use aggregated product-level elasticity segments from the markdown dataset to inform category-level or new-product pricing in the inventory dataset.
- Maintain separate preprocessing and validation pipelines for each dataset, with clear provenance and transformation logs.

Not merging the datasets directly improves model robustness, preserves data quality, and aligns with best practices for building reliable dynamic pricing systems. Using the datasets complementarily—while sharing validated insights rather than raw joined records—yields safer, more interpretable, and actionable pricing models.
