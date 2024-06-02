// models/Student.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Subject Schema
const SubjectSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  score: {
    type: Number,
    required: false,
  },
});

// Define the Semester Schema
const SemesterSchema = new Schema({
  semesterNumber: {
    type: Number,
    required: false,
  },
  subjects: [SubjectSchema],
  sgpa: {
    type: Number,
    required: false,
  },
});

// Define the Student Schema
const Students = new Schema({
  email: {
    type: String,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  yearOfAdmission: {
    type: Number,
    required: false,
  },
  photo: {
    type: String,
  },
  semesters: [SemesterSchema],
  cgpa: {
    type: Number,
    required: false,
  },
});

// Pre-save hook to calculate CGPA
// Students.pre('save', function (next) {
//   if (this.semesters.length > 0) {
//     const totalSgpa = this.semesters.reduce((sum, semester) => sum + semester.sgpa, 0);
//     this.cgpa = totalSgpa / this.semesters.length;
//   }
//   next();
// });

module.exports = mongoose.model('Students', Students);
