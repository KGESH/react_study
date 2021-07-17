import React, { useState } from 'react';
import type { HomeProps } from 'types/Props';
import LoginForm from 'components/login-form/LoginForm';


const Login = ({isLoggedIn}: HomeProps) => {

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

export default Login;
