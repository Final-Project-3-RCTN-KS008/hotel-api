// userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to create a new user
router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);
// Route to get a specific user by ID
router.get("/:id", userController.getUserById);

// Route to update a user by ID
router.put("/:id", userController.updateUser);

// Route to delete a user by ID
router.delete("/:id", userController.deleteUser);

// Other user-related routes...

module.exports = router;
