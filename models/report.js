const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
   {
      patient: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         unique: true,
         ref: "Patient",
      },
      examiner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "Doctor",
      },
      status: {
         type: String,
      },
      date: {
         type: String,
      },
   },
   { timestamps: true }
);

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;