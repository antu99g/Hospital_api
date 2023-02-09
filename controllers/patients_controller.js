const Patient = require('../models/patients');
const Doctor = require('../models/doctors');
const Report = require('../models/report');

module.exports.register = async function (req, res) {
   try{
      let patient = await Patient.findOne({ phone: req.body.phone });

      if (patient) {
         return res.status(208).json({
            success: true,
            message: "Patient already registered",
            data: {
               id: patient._id,
               phone: patient.phone,
               patientName: patient.patientName,
               age: patient.age,
               sex: patient.sex
            },
         });
      } else {
         const newPatient = {
            phone: req.body.phone,
            patientName: req.body.patientName,
            age: req.body.age,
            sex: req.body.sex,
         };

         const created = await Patient.create(newPatient);

         return res.status(200).json({
            success: true,
            message: "New patient registered successfully",
            data: {
               id: created._id,
               ...newPatient
            },
         });
      }
   } catch (err) {
      return res.status(404).json({
         success: false,
         message: "Error in registering patient",
      });
   }
};

module.exports.createReport = async function (req, res) {
   try{
      const patient = await Patient.findById(req.params.id);

      const newReport = await Report.create({
         patient: patient._id,
         examiner: req.userid,
         status: req.body.status,
         date: req.body.date,
      });
   
      return res.status(200).json({
         success: true,
         message: "Report created successfully",
         data: {
            id: newReport._id,
            patient: patient.patientName,
            examiner: req.username,
            status: newReport.status,
            date: newReport.date,
         },
      });
   } catch (err) {
      return res.status(404).json({
         success: false,
         message: "Error in request",
         error: err
      });
   }
};

module.exports.reportList = async function (req, res) {
   let patient = await Patient.findById(req.params.id);

   if(patient){
      let reports = await Report.find({ patient: req.params.id });
      let updatedReportList = [];
      
      for(let i of reports){
         const doctor = await Doctor.findById(i.examiner);
         let report = {
            id: i._id,
            patient: patient.patientName,
            examiner: doctor.username,
            status: i.status,
            date: i.date,
         };
         updatedReportList.push(report);
      }

      return res.status(200).json({
         success: true,
         data: updatedReportList
      });
   } else {
      return res.status(404).json({
         success: false,
         message: "Couldn't find patient"
      });
   }
};

module.exports.allStatusReport = async function (req, res) {
   try{
      console.log('function running');
      let reports = await Report.find({ status: req.params.status });

      let updatedReportList = [];

      for (let i of reports) {
         const patient = await Patient.findById(i.patient);
         const doctor = await Doctor.findById(i.examiner);
         let report = {
            id: i._id,
            patient: patient.patientName,
            examiner: doctor.username,
            status: i.status,
            date: i.date,
         };
         updatedReportList.push(report);
      }

      return res.status(200).json({
         success: true,
         data: updatedReportList,
      });
   } catch (err) {
      return res.status(404).json({
         success: false,
         message: "Please input status",
      });
   }
};