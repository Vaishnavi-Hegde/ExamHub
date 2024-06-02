// RegisterA.js
import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterAdmin = () => {
  return (
    <RegisterForm
      registerUrl="http://localhost:3001/api/admin/register"
      type="admin"      
    />
  );
};

export default RegisterAdmin;
