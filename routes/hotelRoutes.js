const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");

// Route to create a new hotel
router.post("/", hotelController.createHotel);
// Route to get all hotels
router.get("/", hotelController.getAllHotels);

// Route to search hotels based on a query parameter (e.g., /search?keyword=keyword_value)
router.get("/search", hotelController.searchHotels);

// Route to get a specific hotel by ID
router.get("/:id", hotelController.getHotelById);

// Route to update a hotel by ID
router.put("/:id", hotelController.updateHotel);

// Route to delete a hotel by ID
router.delete("/:id", hotelController.deleteHotel);

module.exports = router;
