// models/Announcement.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Announcement Schema
const AnnouncementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);
