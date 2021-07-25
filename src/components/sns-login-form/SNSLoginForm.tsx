import React from 'react';
import 'components/sns-login-form/style/SNSLoginForm.css';
import GoogleLoginButton from 'components/google-login-button/GoogleLoginButton';
import { HomeProps } from 'types/Props';

const SNSLoginForm = () => (
    <div className='sns_login_form'>
      <h1 className='sns_login_form__title'>간편로그인</h1>
      <button className='sns_login_form__kakao_login_button'>
        카카오 로그인
      </button>
      <button className='sns_login_form__naver_login_button'>
        네이버 로그인
      </button>
      <GoogleLoginButton />
    </div>
  );

export default SNSLoginForm;
