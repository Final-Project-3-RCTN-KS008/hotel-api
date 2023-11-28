const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomType: {
    type: String,
    enum: ["single", "double"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Other room details
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
