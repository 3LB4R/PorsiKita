const Order = require("../models/Order");
const Restaurant = require("../models/Restaurant");

// GANTI KODE CREATE ORDER LAMA DENGAN VERSI ANTI-BADAI INI:
exports.createOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items, totalPrice } = req.body;
    const Restaurant = require("../models/Restaurant");
    const Order = require("../models/Order");

    // 1. Tarik data warung dari database
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Warung ga ketemu cuy!" });
    }

    // 2. Validasi Brute-Force (Cek ID atau Nama) + Potong Stok
    for (let item of items) {
      // Kita cari pakai ID. Kalau Mongoose error, kita tembak langsung pakai Nama Menunya!
      const menu = restaurant.menus.find(
        (m) => String(m._id) === String(item.menuId) || m.name === item.name,
      );

      if (!menu) {
        return res
          .status(400)
          .json({ error: `Waduh, menu ${item.name} ga sinkron sama DB!` });
      }
      if (menu.stock < item.quantity) {
        return res
          .status(400)
          .json({ error: `Stok ${item.name} sisa ${menu.stock} doang bang!` });
      }

      // Potong stok langsung di dalam memori
      menu.stock -= item.quantity;
    }

    // 3. Simpan perubahan stok kembali ke database
    await restaurant.save();

    // 4. Catat ke Riwayat Pesanan
    const newOrder = new Order({
      userId: userId || "user_001",
      restaurantId,
      items,
      totalPrice,
      status: "Diproses",
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Tender Berhasil Disetujui!", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Server meledak: " + error.message });
  }
};
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate("restaurantId", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fitur Tambahan (20%): Aggregation Pipeline
exports.getRestaurantRevenue = async (req, res) => {
  try {
    const stats = await Order.aggregate([
      { $match: { status: "Selesai" } },
      {
        $group: {
          _id: "$restaurantId",
          totalRevenue: { $sum: "$totalPrice" },
          totalOrders: { $sum: 1 },
        },
      },
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Fitur Admin: Update Status Pesanan
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    res.json({ message: "Status pesanan di-markup... eh di-update!", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Fitur Hapus (Delete): God Mode untuk Admin (Bisa hapus riwayat apa pun)
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order)
      return res.status(404).json({ error: "Pesanan tidak ditemukan" });

    // ATURAN LAMA YANG BIKIN ERROR (if order.status !== 'Diproses') SUDAH KITA HAPUS DI SINI!

    await Order.findByIdAndDelete(req.params.id);
    res.json({
      message: "Pesanan berhasil dibatalkan dan dihapus dari database.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Fitur Admin: Mengambil SEMUA pesanan dari seluruh customer
exports.getAllOrders = async (req, res) => {
  try {
    // .populate('restaurantId') digunakan agar nama warung tetap muncul
    const orders = await Order.find().populate("restaurantId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
