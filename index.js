const express = require("express");
const port = 8000;
const app = express();

// Loading database
const db = require('./config/mongoose');

// Fetching form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Fetching routes
app.use('/', require('./routes'));


app.listen(port, (err) => {
   if (err) {
      console.log("Error in running the server", err);
   }
   console.log(`Server is running on port: ${port}`);
});