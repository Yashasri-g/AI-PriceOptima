import { useState } from "react";
import { API_BASE } from "./config";

export default function App() {
  const [form, setForm] = useState({
    Price: 50,
    avg_demand_7d: 120,
    Inventory_Level: 200,
    Units_Ordered: 110,
    Discount: 10,
    Holiday_Promotion: 0,
    Competitor_Pricing: 52,
    Demand_Forecast: 130,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({
      ...p,
      [name]: Number(value),
    }));
  };

  const submit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/recommend-price`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "API request failed");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err?.message || "Failed to connect to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <div style={styles.kicker}>PriceOptima</div>
            <h1 style={styles.h1}>Dynamic Pricing Dashboard</h1>
            <p style={styles.p}>
              Enter signals and get a recommended price from your FastAPI + LightGBM model.
            </p>
          </div>

          <div style={styles.badge}>FastAPI • Local</div>
        </header>

        <div style={styles.grid}>
          {/* Inputs */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>Inputs</div>

            <div style={styles.formGrid}>
              <Field label="Base Price" name="Price" value={form.Price} onChange={onChange} />
              <Field label="Avg Demand (7d)" name="avg_demand_7d" value={form.avg_demand_7d} onChange={onChange} />
              <Field label="Inventory Level" name="Inventory_Level" value={form.Inventory_Level} onChange={onChange} />
              <Field label="Demand Forecast" name="Demand_Forecast" value={form.Demand_Forecast} onChange={onChange} />
            </div>

            <div style={styles.apiRow}>
              <div style={styles.apiBox}>
                <div style={styles.apiLabel}>API</div>
                <div style={styles.apiValue}>{API_BASE}/recommend-price</div>
              </div>

              <button style={styles.button} onClick={submit} disabled={loading}>
                {loading ? "Loading..." : "Get Recommendation"}
              </button>
            </div>

            {error && <div style={styles.errorBox}>{error}</div>}
          </div>

          {/* Output */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>Output</div>

            {!result ? (
              <div style={styles.empty}>
                <div style={styles.emptyIcon}>📊</div>
                <div style={styles.emptyText}>No response yet. Submit inputs to see results.</div>
              </div>
            ) : (
              <>
                <div style={styles.kpiGrid}>
                  <KPI label="Recommended Price" value={`₹ ${Number(result.recommended_price).toFixed(2)}`} />
                  <KPI label="Predicted Demand" value={Number(result.predicted_demand).toFixed(2)} />
                  <KPI label="Demand Ratio" value={Number(result.demand_ratio).toFixed(3)} />
                  <KPI label="Base Price" value={`₹ ${Number(result.base_price).toFixed(2)}`} />
                </div>

                <div style={styles.jsonBox}>
                  <div style={styles.jsonHeader}>
                    <span style={styles.jsonTitle}>Raw JSON</span>
                    <button
                      style={styles.smallBtn}
                      onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))}
                    >
                      Copy
                    </button>
                  </div>
                  <pre style={styles.pre}>{JSON.stringify(result, null, 2)}</pre>
                </div>
              </>
            )}
          </div>
        </div>

        <footer style={styles.footer}>
          Milestone 6 • Step 3 — React dashboard connected to FastAPI
        </footer>
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function Field({ label, name, value, onChange }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <input style={styles.input} name={name} value={value} type="number" onChange={onChange} />
    </div>
  );
}

function KPI({ label, value }) {
  return (
    <div style={styles.kpi}>
      <div style={styles.kpiLabel}>{label}</div>
      <div style={styles.kpiValue}>{value}</div>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f6f8ff 0%, #ffffff 100%)",
    color: "#0f172a",
    padding: "24px",
    boxSizing: "border-box",
  },
  container: { maxWidth: 1100, margin: "0 auto" },

  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "rgba(15,23,42,0.6)",
    marginBottom: 6,
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.5 },
  p: { margin: "8px 0 0", color: "rgba(15,23,42,0.65)", lineHeight: 1.5, maxWidth: 650 },
  badge: {
    border: "1px solid rgba(15,23,42,0.12)",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 800,
    background: "rgba(15,23,42,0.03)",
    whiteSpace: "nowrap",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },

  card: {
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 16,
    padding: 16,
    background: "white",
    boxShadow: "0 18px 50px rgba(15,23,42,0.06)",
  },
  cardTitle: { fontSize: 14, fontWeight: 900, marginBottom: 12 },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  field: { display: "flex", flexDirection: "column" },
  label: { fontSize: 12, color: "rgba(15,23,42,0.65)" },
  input: {
    marginTop: 6,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.14)",
    outline: "none",
    fontSize: 14,
  },

  apiRow: { display: "flex", gap: 12, alignItems: "center", marginTop: 14, flexWrap: "wrap" },
  apiBox: {
    flex: 1,
    minWidth: 240,
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 12,
    padding: "10px 12px",
    background: "rgba(15,23,42,0.03)",
  },
  apiLabel: { fontSize: 11, color: "rgba(15,23,42,0.6)" },
  apiValue: { fontSize: 12, fontWeight: 900, marginTop: 2 },

  button: {
    border: "none",
    borderRadius: 12,
    padding: "11px 14px",
    fontWeight: 900,
    color: "white",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    cursor: "pointer",
    minWidth: 190,
  },

  errorBox: {
    marginTop: 12,
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.18)",
    color: "#991b1b",
    fontSize: 13,
    lineHeight: 1.4,
  },

  empty: {
    borderRadius: 14,
    border: "1px dashed rgba(15,23,42,0.18)",
    padding: 18,
    background: "rgba(15,23,42,0.02)",
    textAlign: "center",
  },
  emptyIcon: { fontSize: 28, marginBottom: 8 },
  emptyText: { color: "rgba(15,23,42,0.65)", fontSize: 13 },

  kpiGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  kpi: {
    borderRadius: 14,
    border: "1px solid rgba(15,23,42,0.10)",
    padding: 12,
    background: "rgba(15,23,42,0.03)",
  },
  kpiLabel: { fontSize: 12, color: "rgba(15,23,42,0.65)" },
  kpiValue: { marginTop: 6, fontSize: 18, fontWeight: 950 },

  jsonBox: {
    marginTop: 14,
    borderRadius: 14,
    border: "1px solid rgba(15,23,42,0.10)",
    overflow: "hidden",
  },
  jsonHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    background: "rgba(15,23,42,0.03)",
  },
  jsonTitle: { fontSize: 12, fontWeight: 900, color: "rgba(15,23,42,0.75)" },
  smallBtn: {
    border: "1px solid rgba(15,23,42,0.12)",
    background: "white",
    borderRadius: 10,
    padding: "7px 10px",
    cursor: "pointer",
    fontWeight: 900,
    fontSize: 12,
  },
  pre: { margin: 0, padding: 12, fontSize: 12, lineHeight: 1.5, overflowX: "auto" },

  footer: { marginTop: 14, fontSize: 12, color: "rgba(15,23,42,0.55)" },
};

/* 
  Responsive quick fix (no CSS):
  - Vite/React will keep it readable.
  - If you want perfect single-column on mobile, tell me and I’ll add a 5-line CSS file.
*/
