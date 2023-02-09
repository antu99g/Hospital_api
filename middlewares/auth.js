const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctors');

// Middleware for verifying a user(doctor)
module.exports.verifyUser = async function (req, res, next) {   
   try{
      const bearerHeader = req.headers['authorization'];
      let bearer = bearerHeader.split(' ');
      let bearerToken = bearer[1];
      const decoded = jwt.verify(bearerToken, "sercretKey");
      const user = await Doctor.findById(decoded.userid);
      if(user){
         req.userid = user._id;
         req.username = user.username;
         next();
      }
   }catch(err){
      return res.status(403).json({
         success: false,
         message: 'You are not authorized to access this page'
      });
   }
}