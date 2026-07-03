import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home"; // Pastikan h-nya kecil sesuai nama file kamu
import RestaurantDetail from "./pages/RestaurantDetail";
import OrderHistory from "./pages/OrderHistory";
import AdminDashboard from "./pages/AdminDashboard";
import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    /* INI DIA PENYELAMATNYA: <BrowserRouter> */
    <BrowserRouter>
      <div>
        <nav
          className="navbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <h2
              style={{
                margin: 0,
                color: "var(--primary-color)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🛵</span> PorsiKita
            </h2>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "var(--text-color)",
                fontWeight: "500",
              }}
            >
              Beranda
            </Link>
            <Link
              to="/history"
              style={{
                textDecoration: "none",
                color: "var(--text-color)",
                fontWeight: "500",
              }}
            >
              Riwayat Pesanan
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--text-color)",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
          </button>
        </nav>

        <div
          className="container"
          style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/admin-rahasia" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
