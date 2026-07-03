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
      {/* 🔮 CSS KHUSUS UNTUK EFEK NEON DAN BLUR */}
      <style>{`
        .neon-card {
          position: relative;
          background: var(--card-bg);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid var(--border-color);
        }
        .neon-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 10px 25px rgba(255, 71, 87, 0.3), 0 0 40px rgba(255, 71, 87, 0.1);
          border-color: var(--primary-color);
          z-index: 10;
        }
        .resto-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .neon-card:hover .resto-img {
          transform: scale(1.1); /* Gambar membesar pas di hover */
        }
        .card-content {
          position: relative;
          padding: 1.5rem;
          background: rgba(30, 30, 30, 0.6); /* Efek gelap transparan */
          backdrop-filter: blur(10px); /* Efek Blur Glassmorphism */
          -webkit-backdrop-filter: blur(10px);
          margin-top: -30px;
          border-radius: 16px 16px 0 0;
        }
      `}</style>

      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "4rem 1rem",
          background:
            "linear-gradient(135deg, rgba(255, 71, 87, 0.1) 0%, var(--card-bg) 100%)",
          borderRadius: "24px",
          border: "1px dashed var(--primary-color)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", marginTop: 0 }}>
          Makanan Beracun Gratis 🦅
        </h1>
        <p style={{ color: "gray", fontSize: "1.2rem", marginBottom: "2rem" }}>
          Pilih menu makananmu sebelum harganya di-markup oknum pejabat.
        </p>
        <input
          type="text"
          placeholder="🔍 Cari tender makanan (contoh: Kopi, Nasi, Burger)..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "1.2rem",
            width: "100%",
            maxWidth: "650px",
            borderRadius: "50px",
            border: "2px solid var(--primary-color)",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            fontSize: "1.1rem",
            outline: "none",
            boxShadow: "0 0 15px rgba(255, 71, 87, 0.2)",
          }}
        />
      </div>

      {/* GRID WARUNG */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {restaurants.map((r) => (
          <div key={r._id} className="neon-card">
            {/* GAMBAR WARUNG */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={
                  r.image ||
                  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800"
                }
                alt={r.name}
                className="resto-img"
              />
            </div>

            {/* KONTEN BER-BLUR */}
            <div className="card-content">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 0.5rem 0",
                    color: "var(--primary-color)",
                    fontSize: "1.4rem",
                  }}
                >
                  {r.name}
                </h3>
                <span
                  style={{
                    background: "#ffa502",
                    color: "black",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  ⭐ {r.rating}
                </span>
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--hover-bg)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  🛡️ Bekingan: {r.cuisineType}
                </span>
              </div>

              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                "{r.description}"
              </p>

              <p
                style={{
                  color: "gray",
                  fontSize: "0.85rem",
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
                    marginTop: "1.5rem",
                    borderRadius: "12px",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Inspeksi Menu 🕵️‍♂️
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
