const Doctor = require('../models/doctors');
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
   try{
      if(req.body.password != req.body.confirmPassword){
         throw "error in username or password";
      }
      let doctor = await Doctor.findOne({ username: req.body.username });
      
      const body = {
         username: req.body.username,
         password: req.body.password,
      };

      if (doctor) {
         return res.status(208).json({
            success: true,
            message: "User already registered",
            data: {
               id: doctor._id,
               username: doctor.username
            },
         });
      } else {
         const newDoctor = await Doctor.create(body);

         return res.status(200).json({
            success: true,
            message: "New user registered successfully",
            data: {
               id: newDoctor._id,
               ...body
            }
         });
      }
   } catch(err) {
      return res.status(404).json({
         success: false,
         message: 'Error in registering new user',
      });
   }
}

module.exports.login = async function (req, res) {      
   try{
      let doctor = await Doctor.findOne({ username: req.body.username });

      if (doctor && doctor.password == req.body.password) {

         const token = jwt.sign({userid: doctor._id}, 'sercretKey', {expiresIn: '1d'});         

         return res.status(200).json({
            success: true,
            token
         });            
      }
   }catch(err){
      return res.json({
         success: false,
         message: "Error in username or password",
      });
   }
}