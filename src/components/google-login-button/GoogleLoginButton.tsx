import React from 'react';
import { GoogleLogin } from 'services/firebase/GoogleLogin';

const GoogleLoginButton = () => (
  <button
    className='google_login_button'
    onClick={() => {
      GoogleLogin();
    }}
  >
    구글 로그인
  </button>
);

export default GoogleLoginButton;
