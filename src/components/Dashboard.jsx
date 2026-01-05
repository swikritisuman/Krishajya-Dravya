import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ExploreSeason from "./ExploreSeason";
const crops = JSON.parse(localStorage.getItem("crops")) || [];

<ExploreSeason crops={crops} />
export default function Dashboard({ crops }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");

    // destroy previous instance if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: crops.length ? crops.map((c) => c.name) : ["No data"],
        datasets: [
          {
            label: "Earnings (₹)",
            data: crops.length
              ? crops.map((c) => Number(c.price || 0) * Number(c.qty || 0))
              : [0],
            backgroundColor: "#4caf50",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [crops]);

  const totalEarnings = crops.reduce(
    (s, c) => s + Number(c.price || 0) * Number(c.qty || 0),
    0
  );

  return (
    <section id="dashboard" className="panel">
      <div className="panel-head">
        <h1>Farmer Dashboard</h1>
        <p className="muted">
          Quick summary of your crops, contracts and earnings
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card card">
          <div className="stat-icon">📄</div>
          <div className="stat-body">
            <div className="stat-label">Total Crops</div>
            <div className="stat-value">{crops.length}</div>
          </div>
        </div>

        <div className="stat-card card">
          <div className="stat-icon">💰</div>
          <div className="stat-body">
            <div className="stat-label">Total Earnings</div>
            <div className="stat-value">
              ₹{totalEarnings.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      </div>

      <div className="panel-row">
        <div className="card chart-card">
          <h3>Crop-wise Earnings</h3>
          <div style={{ height: 160 }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        <div className="card notices-card">
          <h3>Recent Messages</h3>
          <ul className="messages-list">
            <li>Buyer inquiry: Interested in 100kg tomatoes</li>
            <li>Reminder: Fertilizer subsidy deadline approaching</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
