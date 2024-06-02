const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Subject Schema
const SubjectSchema = new Schema({
  name: { type: String, required: false },
  credit: { type: Number, required: false },
  score: { type: Number, required: false },
  grade: { type: String, required: false },
  gradePoint: { type: Number, required: false },
});

// Pre-save middleware to calculate grade and grade point for the subject
SubjectSchema.pre('save', function(next) {
  if (this.score >= 90) {
    this.grade = 'O';
    this.gradePoint = 10;
  } else if (this.score >= 80) {
    this.grade = 'A+';
    this.gradePoint = 9;
  } else if (this.score >= 70) {
    this.grade = 'A';
    this.gradePoint = 8;
  } else if (this.score >= 60) {
    this.grade = 'B+';
    this.gradePoint = 7;
  } else if (this.score >= 55) {
    this.grade = 'B';
    this.gradePoint = 6;
  } else if (this.score >= 50) {
    this.grade = 'C';
    this.gradePoint = 5;
  } else if (this.score >= 40) {
    this.grade = 'P';
    this.gradePoint = 4;
  } else {
    this.grade = 'F';
    this.gradePoint = 0;
  }
  next();
});

// Define the Semester Schema
const SemesterSchema = new Schema({
  semesterNumber: { type: Number, required: false },
  subjects: [SubjectSchema],
  sgpa: { type: Number, required: false },
});

// Pre-save middleware to calculate SGPA for the semester
SemesterSchema.pre('save', function(next) {
  if (this.subjects.length > 0) {
    let totalCredits = 0;
    let totalGradePoints = 0;

    this.subjects.forEach(subject => {
      totalCredits += subject.credit;
      totalGradePoints += subject.gradePoint * subject.credit;
    });

    this.sgpa = totalGradePoints / totalCredits;
  } else {
    this.sgpa = 0;
  }
  next();
});

// Define the Student Schema
const StudentSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, default: 'password' }, // Ensure to hash passwords in real application
  name: { type: String, required: false },
  branch: { type: String, required: false },
  yearOfAdmission: { type: Number, required: false },
  photo: { type: String, required: false },
  semesters: { type: [SemesterSchema], default: [] },
  cgpa: { type: Number, required: false },
});

// Pre-save hook to calculate CGPA
StudentSchema.pre('save', function(next) {
  if (this.semesters.length > 0) {
    let totalCredits = 0;
    let totalGradePoints = 0;

    this.semesters.forEach(semester => {
      semester.subjects.forEach(subject => {
        totalCredits += subject.credit;
        totalGradePoints += subject.gradePoint * subject.credit;
      });
    });

    this.cgpa = totalGradePoints / totalCredits;
  } else {
    this.cgpa = 0;
  }
  next();
});

module.exports = mongoose.model('Students', StudentSchema);
