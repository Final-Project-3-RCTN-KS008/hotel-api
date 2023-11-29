const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String }, // URL/path for hotel image
  rating: { type: Number }, // Hotel rating
  description: { type: String }, // Description of the hotel
  price: {
    type: Number,
    required: true,
  },
  // Other hotel details
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
