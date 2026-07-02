const Order = require("../models/Order");
const Restaurant = require("../models/Restaurant");

exports.createOrder = async (req, res) => {
  const { userId, restaurantId, items, totalPrice } = req.body;

  try {
    // Validasi & Kurangi Stok (Atomicity)
    for (let item of items) {
      const result = await Restaurant.updateOne(
        {
          _id: restaurantId,
          "menus._id": item.menuId,
          "menus.stock": { $gte: item.quantity },
        },
        { $inc: { "menus.$.stock": -item.quantity } },
      );
      if (result.modifiedCount === 0) {
        return res
          .status(400)
          .json({ error: `Stok menu ${item.name} habis atau tidak cukup!` });
      }
    }

    const newOrder = await Order.create({
      userId,
      restaurantId,
      items,
      totalPrice,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
// Fitur Hapus (Delete): Membatalkan pesanan
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order)
      return res.status(404).json({ error: "Pesanan tidak ditemukan" });

    if (order.status !== "Diproses") {
      return res.status(400).json({
        error: "Pesanan yang sudah dikirim/selesai tidak bisa dibatalkan!",
      });
    }

    await Order.findByIdAndDelete(req.params.id);
    res.json({
      message: "Pesanan berhasil dibatalkan dan dihapus dari database.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
