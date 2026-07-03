import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Tunai / COD"); // State Pembayaran

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => setRestaurant(res.data));
  }, [id]);

  const addToCart = (menu) => {
    const existing = cart.find((item) => item.menuId === menu._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.menuId === menu._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        { menuId: menu._id, name: menu.name, price: menu.price, quantity: 1 },
      ]);
    }
  };

  const decreaseQuantity = (menuId) => {
    const existing = cart.find((item) => item.menuId === menuId);
    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item.menuId !== menuId));
    } else {
      setCart(
        cart.map((item) =>
          item.menuId === menuId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const handleCheckout = async () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    try {
      await axios.post("http://localhost:5000/api/orders", {
        userId: "user_001",
        restaurantId: id,
        items: cart,
        totalPrice,
      });

      Swal.fire({
        title: "Anggaran Disetujui! 🤝",
        text: `Pesanan berhasil dibuat pakai metode ${paymentMethod}!`,
        icon: "success",
        background: "var(--card-bg)",
        color: "var(--text-color)",
        confirmButtonColor: "var(--primary-color)",
        confirmButtonText: "Pantau Status",
      }).then(() => navigate("/history"));
    } catch (err) {
      Swal.fire({
        title: "Tender Gagal!",
        text: err.response?.data?.error || "Dana ditahan KPK.",
        icon: "error",
        background: "var(--card-bg)",
        color: "var(--text-color)",
        confirmButtonColor: "var(--primary-color)",
      });
    }
  };

  if (!restaurant)
    return <h2 style={{ textAlign: "center" }}>Memuat menu lezat... ⏳</h2>;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 600px" }}>
        <h2 style={{ color: "var(--primary-color)" }}>{restaurant.name}</h2>
        <p style={{ color: "gray", marginBottom: "2rem" }}>
          📍 {restaurant.address}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {restaurant.menus.map((menu) => (
            <div
              key={menu._id}
              className="card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {/* 📸 FOTO MAKANAN */}
                <img
                  src={
                    menu.image ||
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop"
                  }
                  alt={menu.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}
                />
                <div>
                  <h4 style={{ margin: "0 0 0.5rem 0" }}>{menu.name}</h4>
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    Rp {menu.price.toLocaleString("id-ID")}
                  </p>
                  <small
                    style={{ color: menu.stock === 0 ? "#ff4757" : "#2ed573" }}
                  >
                    Sisa stok: {menu.stock}
                  </small>
                </div>
              </div>
              <button
                className="btn"
                disabled={menu.stock === 0}
                onClick={() => addToCart(menu)}
              >
                {menu.stock === 0 ? "Habis" : "+ Tambah"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className="card"
        style={{ flex: "1 1 300px", position: "sticky", top: "2rem" }}
      >
        <h3>🛒 Keranjang Belanja</h3>
        <hr style={{ borderColor: "var(--border-color)", margin: "1rem 0" }} />

        {cart.length === 0 ? (
          <p style={{ color: "gray", textAlign: "center" }}>
            Keranjangmu masih kosong
          </p>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            {cart.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <span style={{ display: "block", fontWeight: "500" }}>
                    {c.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      marginTop: "0.3rem",
                    }}
                  >
                    <button
                      onClick={() => decreaseQuantity(c.menuId)}
                      style={{
                        background: "var(--hover-bg)",
                        color: "var(--text-color)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "4px",
                        cursor: "pointer",
                        padding: "0 8px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <b style={{ color: "var(--primary-color)" }}>
                      {c.quantity}
                    </b>
                    <button
                      onClick={() =>
                        addToCart({
                          _id: c.menuId,
                          name: c.name,
                          price: c.price,
                        })
                      }
                      style={{
                        background: "var(--hover-bg)",
                        color: "var(--text-color)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "4px",
                        cursor: "pointer",
                        padding: "0 8px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <span style={{ fontWeight: "bold" }}>
                  Rp {(c.price * c.quantity).toLocaleString("id-ID")}
                </span>
              </div>
            ))}

            <hr
              style={{ borderColor: "var(--border-color)", margin: "1rem 0" }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              <span>Total:</span>
              <span>
                Rp{" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString("id-ID")}
              </span>
            </div>

            {/* 💳 MENU PEMBAYARAN */}
            <div style={{ marginTop: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.9rem",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                💳 Metode Pembayaran:
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  marginTop: "0.5rem",
                  borderRadius: "8px",
                  backgroundColor: "var(--bg-color)",
                  color: "var(--text-color)",
                  border: "1px solid var(--primary-color)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="Tunai / COD">Uang Tunai (COD) 💵</option>
                <option value="QRIS">QRIS / E-Wallet 📱</option>
                <option value="Bansos">Potong Dana Bansos 🦅</option>
              </select>
            </div>

            <button
              className="btn"
              onClick={handleCheckout}
              style={{
                marginTop: "1rem",
                width: "100%",
                padding: "1rem",
                fontSize: "1.1rem",
              }}
            >
              Checkout Sekarang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
