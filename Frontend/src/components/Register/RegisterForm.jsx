// RegistrationForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = ({ registerUrl, type = "" }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState('');
  const [yearOfAdmission, setYearOfAdmission] = useState('');
  const [usn, setUsn] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('branch', branch);
    formData.append('yearOfAdmission', yearOfAdmission);
    formData.append('usn', usn);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const result = await axios.post(registerUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (result.data === 'Already registered') {
        alert('E-mail already registered! Please Login to proceed.');
      } else {
        alert('Registered successfully');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="mb-3 text-primary text-center">{"Register " + type}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="exampleInputName"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputBranch" className="form-label">
                <strong>Branch</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Branch"
                className="form-control"
                id="exampleInputBranch"
                onChange={(event) => setBranch(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputYearOfAdmission" className="form-label">
                <strong>Year of Admission</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Year of Admission"
                className="form-control"
                id="exampleInputYearOfAdmission"
                onChange={(event) => setYearOfAdmission(event.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="exampleInputUsn" className="form-label">
                <strong>USN</strong>
              </label>
              <input
                type="text"
                placeholder="Enter USN"
                className="form-control"
                id="exampleInputUsn"
                onChange={(event) => setUsn(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <label htmlFor="exampleInputPhoto" className="form-label">
                <strong>Photo</strong>
              </label>
              <input
                type="file"
                className="form-control"
                id="exampleInputPhoto"
                accept="image/*"
                onChange={(event) => setPhoto(event.target.files[0])}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
