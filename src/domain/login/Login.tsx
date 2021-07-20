import React, { useState } from 'react';
import type { HomeProps } from 'types/Props';
import LoginForm from 'components/login-form/LoginForm';


const Login = ({isLoggedIn}: HomeProps) => {

  return (
    <div className="login">
      {/*** Navbar ***/}
      <h1 className="login__title">로그인</h1>
      <div className="login__container">
        <LoginForm />

      </div>
    </div>
  );
}

export default Login;
