// routes/admin.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Announcement = require('../models/Announcement');
const Students = require ('../models/Students');


//Register Admin
router.post('/register', (req, res)=>{
  // To post / insert data into database

  const {email, password} = req.body;
  Admin.findOne({email: email})
  .then(user => {
      if(user){
          res.json("Already registered")
      }
      else{
        Admin.create(req.body)
          .then(admin => res.json(admin))
          .catch(err => res.json(err))
      }
  })
  
})

//Register Student
router.post('/registerStudent', (req, res)=>{
  // To post / insert data into database

  const {email} = req.body;
  Students.findOne({email: email})
  .then(user => {
      if(user){
          res.json("Already registered")
      }
      else{
          Students.create(req.body)
          .then(students => res.json(students))
          .catch(err => res.json(err))
      }
  })
  
})

//Admin Login
router.post('/login', (req, res)=>{
  // To find record from the database
  const {email, password} = req.body;
  Admin.findOne({email: email})
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

// Add a new announcement
router.post('/announcement', async (req, res) => {
  const { title, body } = req.body;

  try {
    const announcement = new Announcement({ title, body });
    await announcement.save();
    res.status(201).json({ msg: 'Announcement created successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});
// /*
// {
//   "results": [
//     {
//       "studentId": "60b8d295f5d2b940d88c32b1",
//       "semesterNumber": 3,
//       "subjects": [
//         { "name": "Mathematics III", "score": 80 },
//         { "name": "Physics II", "score": 85 },
//         { "name": "Chemistry II", "score": 90 }
//       ]
//     },
//     {
//       "studentId": "60b8d295f5d2b940d88c32b2",
//       "semesterNumber": 3,
//       "subjects": [
//         { "name": "Mathematics III", "score": 75 },
//         { "name": "Physics II", "score": 80 },
//         { "name": "Chemistry II", "score": 85 }
//       ]
//     }
//   ]
// }
// */
// // Add or update student results for a given semester
// router.post('/addResult',  async (req, res) => {
//   const { results } = req.body;

//   try {
//     const bulkOperations = results.map(({ email, semesterNumber, subjects }) => ({
//       updateOne: {
//         filter: { email: email },
//         update: {
//           $set: {
//             [`semesters.$[semester].subjects`]: subjects,
//             [`semesters.$[semester].sgpa`]: subjects.reduce((sum, subject) => sum + subject.score, 0) / subjects.length,
//           }
//         },
//         arrayFilters: [{ "semester.semesterNumber": semesterNumber }]
//       }
//     }));

//     // Execute bulk operations
//     const bulkWriteResult = await Students.bulkWrite(bulkOperations);

//     // Update CGPA for all affected students
//     const emails = results.map(({ email }) => email);
//     const affectedStudents = await Students.find({ email: { $in: emails } });
//     for (let student of affectedStudents) {
//       const totalSgpa = student.semesters.reduce((sum, semester) => sum + semester.sgpa, 0);
//       // student.cgpa = totalSgpa / student.semesters.length;
//       student.cgap=9.78;
//       await student.save();
//     }

//     res.status(200).json({ msg: 'Student results updated successfully', bulkWriteResult });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server error');
//   }
// });
// Add or update student results for a given semester
router.post('/addResults', async (req, res) => {
  const {results}= req.body;
  const { semesterNumber, subjects , email} = req.body;

  try {
    results.map(async({ semesterNumber, subjects , email})=>{
      const student = await Students.findOne({email:email});
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    // Calculate SGPA for the given semester
    const totalScore = subjects.reduce((sum, subject) => sum + subject.score, 0);
    const sgpa = totalScore / subjects.length;

    // Find the semester, or add a new one if it doesn't exist
    const semesterIndex = student.semesters.findIndex(s => s.semesterNumber === semesterNumber);
    if (semesterIndex >= 0) {
      // Update existing semester
      student.semesters[semesterIndex].subjects = subjects;
      student.semesters[semesterIndex].sgpa = sgpa;
    } else {
      // Add new semester
      student.semesters.push({ semesterNumber, subjects, sgpa });
    }

    // Recalculate CGPA
    const totalSgpa = student.semesters.reduce((sum, semester) => sum + semester.sgpa, 0);
    student.cgpa = totalSgpa / student.semesters.length;

    // Save student document
    await student.save();

    })
    

    res.status(200).json({ msg: 'Student results updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
