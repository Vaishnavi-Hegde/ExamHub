// routes/admin.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Announcement = require('../models/Announcement');
const Students = require('../models/Students');


//Register Admin
router.post('/register', (req, res) => {
  // To post / insert data into database

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  Admin.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered")
      }
      else {
        Admin.create(req.body)
          .then(admin => res.json(admin))
          .catch(err => res.json(err))
      }
    })

})

//Register Student
//Register Student or Update Password if Already Exists
router.post('/registerStudent', (req, res) => {
  const { email, password } = req.body;
  // Check if email is provided
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  Students.findOne({ email: email })
    .then(student => {
      if (student) {
        student.password = password;
        student.save()
          .then(updatedStudent => res.json(updatedStudent))
          .catch(err => res.json(err));
      } else {
        Students.create(req.body)
          .then(newStudent => res.json(newStudent))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});


//Admin Login
router.post('/login', (req, res) => {
  // To find record from the database
  const { email, password } = req.body;
  Admin.findOne({ email: email })
    .then(user => {
      if (user) {
        // If user found then these 2 cases
        if (user.password === password) {
          res.json("Success");
        }
        else {
          res.json("Wrong password");
        }
      }
      // If user not found then 
      else {
        res.json("No records found! ");
      }
    })
})

// Add a new announcement
router.post('/addAnnouncement', async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.status(201).json('Announcement created successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Add or update student results for a given semester
router.post('/addResults', async (req, res) => {
  const { results } = req.body;

  try {
    for (const { semesterNumber, subjects, email } of results) {
      // Find the student by email
      let student = await Students.findOne({ email });

      if (!student) {
        // If student not found, create a new one
        student = new Students({
          email,
          semesters: [{ semesterNumber, subjects }],
        });
      } else {
        // Find the semester, or add a new one if it doesn't exist
        const semesterIndex = student.semesters.findIndex(s => s.semesterNumber === semesterNumber);
        if (semesterIndex >= 0) {
          // Update existing semester
          student.semesters[semesterIndex].subjects = subjects;
        } else {
          // Add new semester
          student.semesters.push({ semesterNumber, subjects });
        }
      }

      // Save the student (either new or updated)
      await student.save();
    }

    res.status(200).json({ msg: 'Student results updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});


module.exports = router;
