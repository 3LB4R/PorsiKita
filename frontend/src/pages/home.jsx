import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const categories = [
    "Semua",
    "Nusantara",
    "Barat",
    "Jepang",
    "Minuman",
    "Seafood",
  ];

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
    <div style={{ padding: "0 2rem" }}>
      {/* Kategori Filters */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          padding: "1rem 0 2rem 0",
        }}
      >
        {categories.map((cat, i) => (
          <button
            key={i}
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: "30px",
              fontWeight: "500",
              border: i === 0 ? "none" : "1px solid #e0e0e0",
              backgroundColor: i === 0 ? "var(--text-color)" : "white",
              color: i === 0 ? "white" : "var(--text-color)",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{ marginBottom: "2rem", display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          placeholder="🔍 Cari restoran atau makanan..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem 1.5rem",
            borderRadius: "30px",
            border: "none",
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </div>

      {/* Grid Restoran Modern */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r._id}
            style={{
              backgroundColor: "var(--card-bg)",
              borderRadius: "24px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            className="modern-shadow"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={r.image}
              alt={r.name}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />

            <div style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <h3
                  style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600" }}
                >
                  {r.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  ⭐ {r.rating}
                </span>
              </div>
              <p
                style={{
                  margin: "0 0 1rem 0",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                {r.cuisineType} • {r.address}
              </p>

              <Link
                to={`/restaurant/${r._id}`}
                style={{ textDecoration: "none" }}
              >
                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    borderRadius: "14px",
                    padding: "0.8rem",
                  }}
                >
                  Lihat Menu
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
