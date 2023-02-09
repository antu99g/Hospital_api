const express = require("express");
const router = express.Router();

const patientsController = require("../controllers/patients_controller");

// Middleware to check authorization
const auth = require("../middlewares/auth");


// Route for registering a patient
router.post("/register", auth.verifyUser, patientsController.register);

// Route for creating a report for a patient
router.post("/:id/create_report", auth.verifyUser, patientsController.createReport);

// Route for all reports of a patient
router.get("/:id/all_reports", patientsController.reportList);


module.exports = router;