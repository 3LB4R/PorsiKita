import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/restaurants?search=${search}`,
      );
      setRestaurants(res.data);
    };
    fetchRestaurants();
  }, [search]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "3rem 1rem",
          background:
            "linear-gradient(135deg, var(--hover-bg) 0%, var(--card-bg) 100%)",
          borderRadius: "16px",
          border: "1px dashed var(--primary-color)",
        }}
      >
        <h1
          style={{ fontSize: "2.8rem", marginBottom: "0.5rem", marginTop: 0 }}
        >
          Penyaluran Gizi Rakyat 🦅
        </h1>
        <p
          style={{ color: "gray", fontSize: "1.1rem", marginBottom: "1.5rem" }}
        >
          Pilih menu makananmu sebelum harganya di-markup oleh oknum pejabat dan
          di-bully buzzer.
        </p>
        <input
          type="text"
          placeholder="🔍 Cari tender makanan (contoh: Nasi Goreng, Oligarki, dll)..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "1.2rem",
            width: "100%",
            maxWidth: "600px",
            borderRadius: "50px",
            border: "2px solid var(--border-color)",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            fontSize: "1rem",
            outline: "none",
            transition: "0.3s",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r._id}
            className="card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                color: "var(--primary-color)",
                fontSize: "1.5rem",
              }}
            >
              {r.name}
            </h3>
            <div>
              <span
                style={{
                  backgroundColor: "var(--hover-bg)",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                🛡️ Bekingan: {r.cuisineType}
              </span>
            </div>
            <p
              style={{
                color: "gray",
                fontSize: "0.9rem",
                marginTop: "1rem",
                flexGrow: 1,
              }}
            >
              📍 TKP: {r.address}
            </p>
            <Link
              to={`/restaurant/${r._id}`}
              style={{ textDecoration: "none" }}
            >
              <button
                className="btn"
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  borderRadius: "8px",
                }}
              >
                Inspeksi Menu 🕵️‍♂️
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
