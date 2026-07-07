import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Tunai");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => setRestaurant(res.data));
  }, [id]);

  const handleUpdateCart = (menu, action) => {
    const existing = cart.find(
      (item) => item.menuId === menu._id || item.menuId === menu.menuId,
    );
    if (action === "add") {
      if (existing) {
        setCart(
          cart.map((item) =>
            item.menuId === (menu._id || menu.menuId)
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        );
      } else {
        setCart([
          ...cart,
          {
            menuId: menu._id,
            name: menu.name,
            price: menu.price,
            quantity: 1,
            image: menu.image,
          },
        ]);
      }
    } else if (action === "remove" && existing) {
      if (existing.quantity === 1) {
        setCart(cart.filter((item) => item.menuId !== existing.menuId));
      } else {
        setCart(
          cart.map((item) =>
            item.menuId === existing.menuId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        );
      }
    }
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
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
        title: "Pesanan Berhasil!",
        text: "Makanan Anda segera diproses.",
        icon: "success",
        confirmButtonColor: "var(--primary-color)",
      }).then(() => navigate("/history"));
    } catch (err) {
      Swal.fire({
        title: "Pesanan Gagal",
        text: err.response?.data?.error,
        icon: "error",
      });
    }
  };

  if (!restaurant)
    return (
      <h2 style={{ textAlign: "center", marginTop: "5rem" }}>Memuat... ⏳</h2>
    );

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        padding: "1rem 2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Kolom Kiri: Menu Makanan */}
      <div style={{ flex: "1 1 600px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            margin: "0 0 0.5rem 0",
          }}
        >
          {restaurant.name}
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          {restaurant.description}
        </p>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {restaurant.menus.map((menu) => (
            <div
              key={menu._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                padding: "1.2rem",
                borderRadius: "24px",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <img
                  src={menu.image}
                  alt={menu.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.2rem" }}>
                    {menu.name}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "600",
                      color: "var(--text-muted)",
                    }}
                  >
                    Rp {menu.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <button
                disabled={menu.stock === 0}
                onClick={() => handleUpdateCart(menu, "add")}
                style={{
                  background: "var(--text-color)",
                  color: "white",
                  border: "none",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                {menu.stock === 0 ? "x" : "+"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Keranjang Modern */}
      <div
        style={{
          flex: "1 1 350px",
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "2rem",
          position: "sticky",
          top: "2rem",
        }}
        className="modern-shadow"
      >
        <h3 style={{ fontSize: "1.3rem", margin: "0 0 2rem 0" }}>
          Pesanan Saya
        </h3>

        {cart.length === 0 ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center" }}>
            Belum ada makanan terpilih.
          </p>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            {cart.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4 style={{ margin: "0 0 0.2rem 0", fontSize: "0.95rem" }}>
                      {c.name}
                    </h4>
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        color: "var(--primary-color)",
                      }}
                    >
                      Rp {c.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    backgroundColor: "var(--bg-color)",
                    padding: "0.3rem 0.5rem",
                    borderRadius: "20px",
                  }}
                >
                  <button
                    onClick={() => handleUpdateCart(c, "remove")}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>
                    {c.quantity}
                  </span>
                  <button
                    onClick={() => handleUpdateCart(c, "add")}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "2px dashed var(--border-color)",
                margin: "1rem 0",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "700",
                fontSize: "1.2rem",
              }}
            >
              <span>Total Tagihan</span>
              <span>
                Rp{" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString("id-ID")}
              </span>
            </div>

            <button
              className="btn-primary"
              onClick={handleCheckout}
              style={{
                width: "100%",
                marginTop: "1rem",
                padding: "1rem",
                fontSize: "1rem",
              }}
            >
              Konfirmasi Pesanan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
