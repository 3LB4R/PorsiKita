const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  cuisineType: String,
  menus: [
    {
      name: String,
      price: Number,
      stock: Number,
      isAvailable: { type: Boolean, default: true },
      image: { type: String },
    },
  ],
});

// Fitur Inovasi (10%): Text Indexing untuk fitur pencarian
restaurantSchema.index({ name: "text", cuisineType: "text" });

module.exports = mongoose.model("Restaurant", restaurantSchema);
