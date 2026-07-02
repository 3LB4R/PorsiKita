// backend/middleware/logger.js
const logger = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] 🚀 User melakukan request: ${req.method} ke ${req.url}`,
  );
  next(); // Lanjut ke proses berikutnya
};

module.exports = logger;
