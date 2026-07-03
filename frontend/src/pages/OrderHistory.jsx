import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    // Ngambil data pesanan khusus si user_001
    axios
      .get("http://localhost:5000/api/orders/user/user_001")
      .then((res) => setOrders(res.data));
  };

  const getStatusBadge = (status) => {
    let color, text;
    if (status === "Diproses") {
      color = "orange";
      text = "Lagi Di-Lobby ⏳";
    } else if (status === "Dikirim") {
      color = "#3498db";
      text = "Dikawal Voorijder 🚓";
    } else if (status === "Selesai") {
      color = "green";
      text = "Anggaran Cair 💸";
    } else {
      color = "gray";
      text = status;
    }

    return (
      <span
        style={{
          backgroundColor: color,
          color: "white",
          padding: "0.3rem 0.8rem",
          borderRadius: "12px",
          fontSize: "0.8rem",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
      >
        {text}
      </span>
    );
  };

  return (
    <div>
      <h2
        style={{
          borderBottom: "2px solid var(--border-color)",
          paddingBottom: "1rem",
        }}
      >
        📜 Laporan Dana... eh Riwayat Pesanan (Customer)
      </h2>
      {orders.length === 0 && <p>Belum ada riwayat korupsi kalori di sini.</p>}

      <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        {orders.map((order) => (
          <div
            key={order._id}
            className="card"
            style={{ borderLeft: `5px solid var(--primary-color)` }}
          >
            {/* TOMBOL BATAL SUDAH DIMUSNAHKAN DARI SINI */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h4 style={{ margin: 0 }}>
                Order ID:{" "}
                <span style={{ fontFamily: "monospace", color: "gray" }}>
                  {order._id.slice(-6)}
                </span>
              </h4>
              {getStatusBadge(order.status)}
            </div>
            <p style={{ margin: "0.5rem 0" }}>
              <b>🏢 Vendor:</b> {order.restaurantId?.name || "Tender Fiktif"}
            </p>
            <p style={{ margin: "0.5rem 0" }}>
              <b>💰 Total Proyek:</b> Rp{" "}
              {order.totalPrice.toLocaleString("id-ID")}
            </p>
            <div
              style={{
                backgroundColor: "var(--bg-color)",
                padding: "1rem",
                borderRadius: "8px",
                marginTop: "1rem",
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>
                Barang Bukti:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "gray" }}>
                {order.items.map((item) => (
                  <li key={item._id}>
                    {item.name} (x{item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
