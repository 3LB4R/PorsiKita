const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Simulasi User ID untuk MVP
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  items: [
    {
      menuId: mongoose.Schema.Types.ObjectId,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  status: { type: String, default: "Diproses" }, // Diproses, Dikirim, Selesai
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
