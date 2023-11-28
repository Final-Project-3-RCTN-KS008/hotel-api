const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const roomRoutes = require("./routes/roomRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); // Establish MongoDB connection

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/users", userRoutes);

const _dirname = path.resolve();
app.use("/images", express.static(path.join(_dirname, "/images")));

// const imagesDirectory = path.join(__dirname, "images");
// app.use("/images", express.static(imagesDirectory));
// Error handling middleware (Not Found & General Error Handler)
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
