const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const orderController = require("../controllers/orderController");

// Restaurant CRUD (Sederhana untuk Read)
router.get("/restaurants", async (req, res) => {
  const { search } = req.query;
  const query = search ? { $text: { $search: search } } : {};
  const restaurants = await Restaurant.find(query);
  res.json(restaurants);
});

router.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.json(restaurant);
});

// Order Routes
router.post("/orders", orderController.createOrder);
router.get("/orders/user/:userId", orderController.getUserOrders);
router.get("/stats/revenue", orderController.getRestaurantRevenue);
router.put("/orders/:id/status", orderController.updateOrderStatus);
router.delete("/orders/:id", orderController.deleteOrder);
router.get("/orders", orderController.getAllOrders);
module.exports = router;
