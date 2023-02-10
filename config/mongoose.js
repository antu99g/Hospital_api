const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://antu:antu@cluster0.mqjdpud.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', () => {
   console.log('Connected to database');
});

module.exports = db;