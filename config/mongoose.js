const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:test@cluster0.rkdmm44.mongodb.net/hospital");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', () => {
   console.log('Connected to database');
});

module.exports = db;