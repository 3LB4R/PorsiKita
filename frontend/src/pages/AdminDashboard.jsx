import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data));
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Hapus Paksa?",
      text: "Apakah kamu yakin ingin menghapus data ini secara permanen?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4757",
      cancelButtonText: "Batal",
      confirmButtonText: "Ya, Hapus data!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/api/orders/${id}`);
          fetchOrders(); // Refresh data otomatis
          Swal.fire(
            "Terhapus!",
            "Riwayat pesanan berhasil dihapus dari database.",
            "success",
          );
        } catch (err) {
          Swal.fire(
            "Gagal Menghapus!",
            err.response?.data?.error || "Terjadi kesalahan pada server",
            "error",
          );
        }
      }
    });
  };
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}/status`, {
        status: newStatus,
      });
      fetchOrders();
      Swal.fire({
        title: "Status Diubah!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire("Error!", "Gagal update status.", "error");
    }
  };

  return (
    <div>
      <h2
        style={{
          borderBottom: "2px solid #ff4757",
          paddingBottom: "1rem",
          color: "#ff4757",
        }}
      >
        ⚙️ Dashboard Pengelola Pesanan
      </h2>
      <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        {orders.map((order) => (
          <div
            key={order._id}
            className="card"
            style={{ borderLeft: `5px solid #ff4757` }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <h4>Order ID: {order._id.slice(-6)}</h4>
              <span style={{ fontWeight: "bold" }}>{order.status}</span>
            </div>
            <p>
              <b>Vendor:</b> {order.restaurantId?.name || "Tidak Diketahui"}
            </p>
            <p>
              <b>Total:</b> Rp {order.totalPrice.toLocaleString("id-ID")}
            </p>

            {/* PANEL ADMIN KHUSUS */}
            <div
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px dashed var(--border-color)",
                display: "flex",
                gap: "1rem",
              }}
            >
              <select
                value={order.status}
                onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "2px solid #ff4757",
                }}
              >
                <option value="Diproses">Diproses</option>
                <option value="Dikirim">Dikirim</option>
                <option value="Selesai">Selesai</option>
              </select>
              <button
                onClick={() => handleDelete(order._id)}
                style={{
                  background: "#ff4757",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Hapus Pesanan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
