// models/Student.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Subject Schema
const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Define the Semester Schema
const SemesterSchema = new Schema({
  semesterNumber: {
    type: Number,
    required: true,
  },
  subjects: [SubjectSchema],
  sgpa: {
    type: Number,
    required: true,
  },
});

// Define the Student Schema
const Students = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  yearOfAdmission: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  semesters: [SemesterSchema],
  cgpa: {
    type: Number,
    required: true,
  },
});

// Pre-save hook to calculate CGPA
Students.pre('save', function (next) {
  if (this.semesters.length > 0) {
    const totalSgpa = this.semesters.reduce((sum, semester) => sum + semester.sgpa, 0);
    this.cgpa = totalSgpa / this.semesters.length;
  }
  next();
});

module.exports = mongoose.model('Student', Students);
