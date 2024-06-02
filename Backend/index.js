const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/examhub');

app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});