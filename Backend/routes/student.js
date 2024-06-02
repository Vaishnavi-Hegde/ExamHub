// routes/admin.js

const express = require('express');
const router = express.Router();
const Students = require ('../models/Students');
const Announcement = require('../models/Announcement');






router.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    Students.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

// GET all announcements
router.get('/announcements', async (req, res) => {
    try {
      const announcements = await Announcement.find().sort({ date: -1 });
      res.json(announcements);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });

router.get('/results/:id', async (req, res) => {
    try {
      const student = await Students.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ msg: 'Student not found' });
      }
  
      res.json({
        name: student.name,
        branch: student.branch,
        yearOfAdmission: student.yearOfAdmission,
        photo: student.photo,
        semesters: student.semesters,
        cgpa: student.cgpa,
      });
    } catch (error) {
      console.error(error.message);
      if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Student not found' });
      }
      res.status(500).send('Server error');
    }
});


module.exports = router;
