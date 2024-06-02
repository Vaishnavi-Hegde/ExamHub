// routes/admin.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Announcement = require('../models/Announcement');

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
router.post('/announcement', authAdmin, async (req, res) => {
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

module.exports = router;
