const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, min: 0 },
  isAvailable: { type: Boolean, default: true },
  image: { type: String },
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisineType: { type: String },
  image: { type: String }, // 📸 Foto Warung
  description: { type: String }, // 📝 Deskripsi Warung
  rating: { type: Number, default: 4.8 }, // ⭐ Rating Palsu
  menus: [menuSchema],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
