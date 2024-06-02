// models/Admin.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Admin Schema
const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Admin', AdminSchema);
