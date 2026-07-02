import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import RestaurantDetail from "./pages/RestaurantDetail";
import OrderHistory from "./pages/OrderHistory";
import "./index.css"; // Pastikan CSS di-import

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Terapkan tema ke body HTML
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <nav
        style={{
          background: "var(--navbar-bg)",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--border-color)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <h2 style={{ margin: 0, color: "var(--primary-color)" }}>
            🛵 PorsiKita
          </h2>
          <Link
            to="/"
            style={{
              color: "var(--text-color)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Beranda
          </Link>
          <Link
            to="/history"
            style={{
              color: "var(--text-color)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Riwayat Pesanan
          </Link>
        </div>

        <button
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "1px solid var(--border-color)",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            cursor: "pointer",
            color: "var(--text-color)",
          }}
        >
          {isDarkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
        </button>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/history" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
