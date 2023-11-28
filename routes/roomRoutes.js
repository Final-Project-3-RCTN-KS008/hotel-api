const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// Route to create a new room
router.post("/", roomController.createRoom);
// Route to get all rooms
router.get("/", roomController.getAllRooms);

// Route to get a specific room by ID
router.get("/:id", roomController.getRoomById);

// Route to update a room by ID
router.put("/:id", roomController.updateRoom);

// Route to delete a room by ID
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
