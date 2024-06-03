// routes/admin.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Announcement = require('../models/Announcement');
const Students = require('../models/Students');
const multer = require('multer');
const path = require('path');

// Set up Multer disk storage
const studentStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/students/');
  },
  filename: (req, file, cb) => {
    // Extract file extension
    const ext = path.extname(file.originalname);
    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = req.body.usn + '-' + uniqueSuffix + ext; // Combining USN and unique suffix
    cb(null, fileName);
  }
});

const studentUpload = multer({ storage: studentStorage }).single('photo'); // Assuming the field name for photo is 'photo'

const announcementStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Determine the upload destination based on file type
    if (file.mimetype.startsWith('image/')) {
      cb(null, 'uploads/announcements/photos');
    } else if (file.mimetype === 'application/pdf') {
      cb(null, 'uploads/announcements/pdfs');
    } else {
      cb(new Error('Unsupported file type'));
    }
  },
  filename: function (req, file, cb) {
    const { title } = req.body;
    const sanitizedTitle = title.replace(/\s+/g, '-').toLowerCase();
    const uniqueSuffix = '-' + Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, sanitizedTitle + uniqueSuffix + path.extname(file.originalname));
  }
});


// Configure Multer middleware with custom storage
const announcementUpload = multer({ storage: announcementStorage });
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
  studentUpload(req, res, (err) => {
    if (err) {
      // Handle upload error
      return res.status(500).json({ error: 'Error uploading file' });
    }

    const { name, email, password, branch, yearOfAdmission, usn } = req.body;
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    Students.findOne({ email: email })
      .then(student => {
        if (student) {
          // Update existing student
          student.name = name;
          student.password = password;
          student.branch = branch;
          student.yearOfAdmission = yearOfAdmission;
          student.usn = usn;
          if (req.file) {
            student.photo = req.file.path; // Assuming Multer sets the file path
          }
          student.save()
            .then(updatedStudent => res.json(updatedStudent))
            .catch(err => res.status(500).json({ error: 'Error updating student', details: err }));
        } else {
          // Create new student
          const newStudent = new Students({
            name,
            email,
            password,
            branch,
            yearOfAdmission,
            usn,
            photo: req.file ? req.file.path : null // Assuming Multer sets the file path
          });
          newStudent.save()
            .then(newStudent => res.json(newStudent))
            .catch(err => res.status(500).json({ error: 'Error creating student', details: err }));
        }
      })
      .catch(err => res.status(500).json({ error: 'Database error', details: err }));
  });
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
router.post('/addAnnouncement', announcementUpload.fields([{ name: 'photos', maxCount: 10 }, { name: 'pdfs', maxCount: 10 }]), (req, res) => {
  // Access uploaded photos via req.files['photos']
  // Access uploaded PDFs via req.files['pdfs']
  // Access form fields via req.body
  const { title, description } = req.body;
  // Check if photos and pdfs are sent
  const photos = req.files['photos'] && req.files['photos'].length > 0 ? req.files['photos'].map(file => file.filename) : [];
  const pdfs = req.files['pdfs'] && req.files['pdfs'].length > 0 ? req.files['pdfs'].map(file => file.filename) : [];
  const newAnnouncement = new Announcement({
    title,
    description,
    photos: photos,
    pdfs: pdfs
  });
  newAnnouncement.save()
    .then(newAnnouncement => res.json(newAnnouncement))
    .catch(err => res.status(500).json({ error: 'Error creating student', details: err }));


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
