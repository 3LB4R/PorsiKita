const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());
const logger = require("./middleware/logger");
app.use(logger); // Middleware aktif!
// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
