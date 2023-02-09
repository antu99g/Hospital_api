const express = require('express');
const router = express.Router();

console.log("router loaded");

const patientsController = require("../controllers/patients_controller");


// Route for getting all reports of a specific status
router.get("/reports/:status", patientsController.allStatusReport);


router.use("/doctors", require("./doctors"));

router.use("/patients", require("./patients"));


module.exports = router;