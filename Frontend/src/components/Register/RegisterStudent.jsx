// Register.js
import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterStudent = () => {
  return (
    <RegisterForm
      registerUrl="http://localhost:3001/api/admin/registerStudent"
      loginUrl="/student/login"
    />
  );
};

export default RegisterStudent;
