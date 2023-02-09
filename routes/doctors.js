const express = require("express");
const router = express.Router();

const doctorsController = require('../controllers/doctors_controller');


// Route for registering a doctor
router.post("/register", doctorsController.register);

// Route for logging in a doctor
router.post("/login", doctorsController.login);


module.exports = router;