const Hotel = require("../models/Hotel");

// Controller function to get all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a specific hotel by ID
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a hotel by ID
const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a hotel by ID
const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Other hotel-related controller functions can be added similarly
const searchHotels = async (req, res) => {
  try {
    const keyword = req.query.keyword; // Retrieve the keyword from the query parameter

    // Implement your search logic using the keyword
    const hotels = await Hotel.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } }, // Search by name (case-insensitive)
        { description: { $regex: keyword, $options: "i" } }, // Search by description (case-insensitive)
        // You can add more fields to search here
      ],
    });

    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  searchHotels,
  // Other controller functions
};
