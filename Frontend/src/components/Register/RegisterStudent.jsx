// Register.js
import React from 'react';
import RegisterForm from './RegisterForm';
import Navbar from '../Navbar';

const RegisterStudent = () => {
  return (
    <>
      <Navbar type="admin" />
      <RegisterForm
        registerUrl="http://localhost:3001/api/admin/registerStudent"
        type="Student"
      />
    </>
  );
};

export default RegisterStudent;
