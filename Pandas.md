# Pandas 

## 1. Introduction

### Definition
Pandas is an open-source Python library specifically designed for data analysis, data cleaning, data manipulation, and data visualization. It provides fast, flexible, and expressive data structures that make working with “relational” or “labeled” data both easy and intuitive.

The term “pandas” is derived from Panel Data and Python Data Analysis.

### Key Features
- Handles large datasets efficiently:  
  Pandas is optimized for performance and can handle millions of rows of data without much difficulty.

- Data cleaning and manipulation:  
  It offers powerful functions for dealing with missing, inconsistent, or unstructured data.

- Data visualization:  
  Integrates seamlessly with Matplotlib and other visualization tools for easy data plotting.

- Supports multiple file formats:  
  Can read and write data from/to CSV, Excel, JSON, SQL, and more.

- Integration with other libraries:  
  Works well with NumPy, Matplotlib, Scikit-learn, and other Python tools used in data science.

### Import Statement
Before using pandas, import it using:

```python
import pandas as pd
```

The alias `pd` is a convention used by most Python developers.

---

## 2. Core Data Structures

Pandas provides two primary data structures:

- **Series** → 1‑Dimensional  
- **DataFrame** → 2‑Dimensional

### a) Series
**Definition:**  
A Series is a one-dimensional labeled array that can hold data of any type — integers, strings, floats, or even Python objects.

**Concept:**  
Think of a Series as a single column in an Excel sheet, where each value has an index label.

**Example:**
```python
import pandas as pd

a = [10, 20, 30]
series = pd.Series(a, index=['x', 'y', 'z'])
print(series)
```

**Output:**
```
x    10
y    20
z    30
dtype: int64
```

**Explanation:**  
- Data: `[10, 20, 30]`  
- Labels (index): `['x', 'y', 'z']`  
- Access: `series['y']` → `20`

### b) DataFrame
**Definition:**  
A DataFrame is a two-dimensional data structure that stores data in rows and columns, similar to a spreadsheet or SQL table. Each column in a DataFrame is a Series.

**Example:**
```python
data = {
  "Name": ["John", "Anna", "Peter"],
  "Age": [22, 24, 20],
  "City": ["London", "Paris", "Berlin"]
}
df = pd.DataFrame(data)
print(df)
```

**Output:**
```
    Name  Age    City
0   John   22  London
1   Anna   24   Paris
2  Peter   20  Berlin
```

**Explanation:**  
- Columns: `Name`, `Age`, `City`  
- Index: `0, 1, 2` (auto-assigned)  
- Access column: `df["Name"]`

---

## 3. Importing and Exporting Data

Pandas makes it easy to load and export data from various file formats.

| File Type | Method |
|-----------|--------|
| CSV       | `pd.read_csv('filename.csv')` |
| Excel     | `pd.read_excel('filename.xlsx')` |
| JSON      | `pd.read_json('filename.json')` |
| SQL       | `pd.read_sql(query, connection)` |

Export to CSV:
```python
df.to_csv('output.csv', index=False)
```

**Example:**
```python
df = pd.read_csv('data.csv')
print(df.head())
```
`head()` displays the top rows for quick verification.

---

## 4. Data Exploration

Useful methods to quickly understand a dataset:

- `df.head(n)` — Returns first `n` rows (e.g. `df.head(5)`)
- `df.tail(n)` — Returns last `n` rows (e.g. `df.tail(3)`)
- `df.info()` — Displays column types, non-null counts, and memory usage
- `df.describe()` — Statistical summary (mean, std, min, max, etc.)
- `df.shape` — Returns tuple `(rows, columns)`
- `df.columns` — Lists all column names

**Example:**
```python
print(df.info())
print(df.describe())
```

---

## 5. Selecting and Indexing Data

- Selecting a column: `df["Name"]` (returns a Series)  
- Selecting rows by label: `df.loc[1]`  
- Selecting rows by index position: `df.iloc[0]`  
- Filtering rows: `df[df["Age"] > 21]`

---

## 6. Data Cleaning

Pandas provides built-in functions to handle missing values, incorrect data types, and duplicates.

| Method | Purpose | Example |
|--------|---------|---------|
| `df.dropna()` | Remove missing (NaN) values | `df.dropna(inplace=True)` |
| `df.fillna(value)` | Fill missing values | `df.fillna(0)` |
| `df.duplicated()` | Identify duplicate rows | `df.duplicated()` |
| `df.drop_duplicates()` | Remove duplicate rows | `df.drop_duplicates(inplace=True)` |
| `df.replace(old, new)` | Replace specific values | `df.replace("N/A", "Unknown")` |
| `df.astype(type)` | Convert column data type | `df["Age"] = df["Age"].astype(int)` |

---

## 7. Data Operations

Common operations:

- Add new column:
```python
df["Total"] = df["Price"] * df["Quantity"]
```
- Delete column:
```python
df.drop("Total", axis=1, inplace=True)
```
- Sorting:
```python
df.sort_values("Age", ascending=False)
```
- Grouping:
```python
df.groupby("City")["Age"].mean()
```
- Aggregation:
```python
df["Age"].sum()
```

---

## 8. Descriptive Statistics

- `df.mean()` — Returns mean value  
- `df.median()` — Returns median  
- `df.mode()` — Returns most frequent value  
- `df.min()` / `df.max()` — Min / Max  
- `df.std()` — Standard deviation  
- `df.corr()` — Correlation between columns

**Example:**
```python
print(df["Age"].mean())
print(df.corr())
```

---

## 9. Data Visualization (Basic)

Pandas integrates with Matplotlib for simple plots.

**Example:**
```python
import matplotlib.pyplot as plt

df["Age"].plot(kind='hist', title='Age Distribution')
plt.show()
```
Change `kind` to `'bar'`, `'line'`, `'scatter'`, etc., to produce other plots.

---

## 10. Summary Table

| Concept | Description |
|---------|-------------|
| Series | One-dimensional labeled array |
| DataFrame | Two-dimensional table with rows & columns |
| `loc` / `iloc` | Select data by label / position |
| `dropna()` / `fillna()` | Handle missing data |
| `groupby()` | Group and summarize data |
| `describe()` | Statistical summary |
| `read_csv()` | Import data from CSV file |

---

## 11. Sample Workflow Example Project

Example: Analysing Electric Vehicle (EV) Data

```python
import pandas as pd

# Step 1: Load data
df = pd.read_csv("ev_data.csv")

# Step 2: Clean data
df.dropna(inplace=True)

# Step 3: Create a new column (energy efficiency)
df["Efficiency"] = df["Energy_kWh"] / df["Distance_km"]

# Step 4: Analyze statistics
print(df.describe())

# Step 5: Filter and visualize efficient EVs
efficient = df[df["Efficiency"] < 0.15]
print(efficient.head())
```

**Explanation:**  
1. Loads EV data into a DataFrame.  
2. Removes missing values for clean analysis.  
3. Calculates a new metric (energy per km).  
4. Displays summary statistics.  
5. Filters efficient vehicles and prints top rows.

---

## References
- W3Schools Pandas Tutorial — https://www.w3schools.com/python/pandas/default.asp  
- Official pandas documentation — https://pandas.pydata.org/  
