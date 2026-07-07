const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./models/Restaurant");

const dataWarung = [
  {
    name: "Ayam Taliwang Bima",
    address: "Jl. Soekarno Hatta",
    cuisineType: "Nusantara",
    rating: 4.9,
    description: "Sajian ayam bakar khas dengan bumbu pedas istimewa.",
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&fit=crop",
    menus: [
      {
        name: "Ayam Bakar Taliwang",
        price: 45000,
        stock: 20,
        image:
          "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Kopi Senja IT",
    address: "Kawasan Kampus Terpadu",
    cuisineType: "Minuman",
    rating: 4.7,
    description: "Pilihan kopi premium untuk menemani produktivitas.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&fit=crop",
    menus: [
      {
        name: "Es Kopi Susu Aren",
        price: 18000,
        stock: 100,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Pizza Italiana",
    address: "Jl. Sudirman No. 1",
    cuisineType: "Barat",
    rating: 4.8,
    description: "Pizza autentik Italia dengan mozzarella panggang.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&fit=crop",
    menus: [
      {
        name: "Pepperoni Pizza",
        price: 85000,
        stock: 10,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Nasi Padang Raya",
    address: "Jl. Pendidikan",
    cuisineType: "Nusantara",
    rating: 4.8,
    description: "Hidangan kaya rempah dengan resep turun temurun.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&fit=crop",
    menus: [
      {
        name: "Nasi Rendang Sapi",
        price: 25000,
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Sushi Sakura",
    address: "Plaza Kota",
    cuisineType: "Jepang",
    rating: 4.6,
    description: "Sushi segar berkualitas tinggi karya koki berpengalaman.",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&fit=crop",
    menus: [
      {
        name: "Salmon Mentai Roll",
        price: 45000,
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Steakhouse Prime",
    address: "Pusat Kota",
    cuisineType: "Barat",
    rating: 4.9,
    description: "Daging sapi pilihan yang dipanggang sempurna.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75bf699?w=800&fit=crop",
    menus: [
      {
        name: "Tenderloin Steak",
        price: 99000,
        stock: 15,
        image:
          "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=500&fit=crop",
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/food_order_db")
  .then(async () => {
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(dataWarung);
    console.log("✅ SEEDING BERHASIL! Tekan Ctrl+C.");
    process.exit();
  });
