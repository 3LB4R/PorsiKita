const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./models/Restaurant");

const dataWarung = [
  {
    name: "Ayam Taliwang Bima",
    address: "Jl. Soekarno Hatta, Bima",
    cuisineType: "Nusantara",
    rating: 4.9,
    description:
      "Sajian ayam bakar khas Nusa Tenggara Barat dengan bumbu pedas istimewa.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&fit=crop",
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
    description:
      "Pilihan kopi premium untuk menemani produktivitas dan tugas harian.",
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
    description:
      "Pizza autentik Italia dengan keju mozzarella panggang yang leleh.",
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
    description: "Hidangan Padang kaya rempah dengan resep turun temurun.",
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
    description:
      "Sushi segar berkualitas tinggi yang dibuat oleh koki berpengalaman.",
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
    name: "Ramen Kyoto",
    address: "Kawasan Kuliner",
    cuisineType: "Jepang",
    rating: 4.5,
    description: "Ramen kuah kaldu kental dengan topping daging lembut.",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&fit=crop",
    menus: [
      {
        name: "Spicy Miso Ramen",
        price: 40000,
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Steakhouse Prime",
    address: "Pusat Kota",
    cuisineType: "Barat",
    rating: 4.9,
    description:
      "Daging sapi pilihan yang dipanggang sempurna sesuai selera Anda.",
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
  {
    name: "Seafood Lawata",
    address: "Pantai Lawata Bima",
    cuisineType: "Seafood",
    rating: 4.8,
    description: "Hidangan laut segar hasil tangkapan nelayan lokal hari ini.",
    image:
      "https://images.unsplash.com/photo-1565557612165-27a4d538eec7?w=800&fit=crop",
    menus: [
      {
        name: "Kepiting Saus Padang",
        price: 150000,
        stock: 10,
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Dimsum Imperial",
    address: "Jl. Veteran",
    cuisineType: "Chinese",
    rating: 4.7,
    description: "Dimsum premium buatan tangan dengan isian padat dan lezat.",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&fit=crop",
    menus: [
      {
        name: "Hakau Udang",
        price: 20000,
        stock: 35,
        image:
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Gelato Sweet",
    address: "Taman Kota",
    cuisineType: "Pencuci Mulut",
    rating: 5.0,
    description:
      "Es krim Italia rendah lemak dengan berbagai pilihan rasa segar.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?w=800&fit=crop",
    menus: [
      {
        name: "Dark Chocolate Gelato",
        price: 25000,
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1570197781417-0a5237500ee3?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Classic Burger",
    address: "Kantin Universitas",
    cuisineType: "Barat",
    rating: 4.4,
    description:
      "Burger daging sapi asli dengan roti lembut dan sayuran segar.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&fit=crop",
    menus: [
      {
        name: "Double Beef Burger",
        price: 35000,
        stock: 15,
        image:
          "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Bebek Goreng H. Slamet",
    address: "Jl. Ahmad Yani",
    cuisineType: "Nusantara",
    rating: 4.7,
    description:
      "Bebek goreng empuk dengan sambal korek pedas yang menggugah selera.",
    image:
      "https://images.unsplash.com/photo-1604908177525-ce54964923f8?w=800&fit=crop",
    menus: [
      {
        name: "Bebek Goreng Spesial",
        price: 35000,
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&fit=crop",
      },
    ],
  },
  {
    name: "El Taco Lokal",
    address: "Pantai Kalaki",
    cuisineType: "Meksiko",
    rating: 4.6,
    description: "Taco renyah dengan isian daging dan saus salsa segar.",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&fit=crop",
    menus: [
      {
        name: "Beef Tacos",
        price: 35000,
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Warung Soto Nusantara",
    address: "Jalan Bypass",
    cuisineType: "Nusantara",
    rating: 4.5,
    description: "Soto ayam berkuah hangat dengan tambahan koya gurih.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&fit=crop",
    menus: [
      {
        name: "Soto Ayam Koya",
        price: 20000,
        stock: 50,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Martabak Terang Bulan",
    address: "Perempatan Jalan",
    cuisineType: "Pencuci Mulut",
    rating: 4.9,
    description: "Martabak manis legit dengan aneka topping melimpah.",
    image:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=800&fit=crop",
    menus: [
      {
        name: "Martabak Keju Coklat",
        price: 60000,
        stock: 20,
        image:
          "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=500&fit=crop",
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/food_order_db")
  .then(async () => {
    console.log("Menghapus data lama...");
    await Restaurant.deleteMany({});
    console.log("Menyimpan data restoran profesional...");
    await Restaurant.insertMany(dataWarung);
    console.log("✅ DATABASE SUDAH BERSIH! Tekan Ctrl+C untuk keluar.");
    process.exit();
  });
