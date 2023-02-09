const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
   phone: {
      type: Number,
      required: true,
      unique: true,
   },
   patientName: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
      required: true,
   },
   sex: {
      type: String,
      required: true,
   },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;