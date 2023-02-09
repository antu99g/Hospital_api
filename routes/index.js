const express = require('express');
const router = express.Router();

const patientsController = require("../controllers/patients_controller");


router.get("/reports/:status", patientsController.allStatusReport);


router.use("/doctors", require("./doctors"));

router.use("/patients", require("./patients"));


module.exports = router;