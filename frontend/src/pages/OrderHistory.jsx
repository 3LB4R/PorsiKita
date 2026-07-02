import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:5000/api/orders/user/user_001")
      .then((res) => setOrders(res.data));
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}/status`, {
        status: newStatus,
      });
      fetchOrders(); // Refresh data setelah update

      // POPUP MODERN SUCCESS
      Swal.fire({
        title: "Manipulasi Berhasil!",
        text: `Status diubah jadi ${newStatus} (Semoga aman dari sidak) 🤫`,
        icon: "success",
        background: "var(--card-bg)",
        color: "var(--text-color)",
        confirmButtonColor: "var(--primary-color)",
        timer: 2000, // Otomatis hilang dalam 2 detik
        showConfirmButton: false,
      });
    } catch (error) {
      // POPUP MODERN ERROR
      Swal.fire({
        title: "Ups Ketahuan!",
        text: "Gagal update status. Pastikan Backend udah di-restart!",
        icon: "error",
        background: "var(--card-bg)",
        color: "var(--text-color)",
        confirmButtonColor: "var(--primary-color)",
      });
    }
  };
  // Fungsi untuk ngasih warna dan teks nyeleneh ke badge status
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
        📜 Laporan Dana... eh Riwayat Pesanan
      </h2>

      {orders.length === 0 && <p>Belum ada riwayat korupsi kalori di sini.</p>}

      <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        {orders.map((order) => (
          <div
            key={order._id}
            className="card"
            style={{ borderLeft: `5px solid var(--primary-color)` }}
          >
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

            {/* --- PANEL ADMIN (KONTROL STATUS) --- */}
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px dashed var(--border-color)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "gray" }}>
                🛠️ Kontrol Admin (Ubah Status):
              </span>
              <select
                value={order.status}
                onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                  cursor: "pointer",
                }}
              >
                <option value="Diproses">Diproses</option>
                <option value="Dikirim">Dikirim</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
