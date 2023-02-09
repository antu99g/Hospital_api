const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hospital_db");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', () => {
   console.log('Connected to database');
});

module.exports = db;