import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { client as aplloClient } from 'services/apllo-client/apllo';
import { KakaoLoginMutation } from 'services/apllo-client/KakaoLoginMutation';
import { queryByTestId } from '@testing-library/react';

const KakaoCallback = () => {
  const location = useLocation();
  const { access_token, refresh_token } = queryString.parse(location.search);
  console.log(`Access Token = ${access_token}`);
  console.log(`Refresh Token = ${refresh_token}`);

  alert('hello');
  return <Redirect to='/' />;
};

export default KakaoCallback;
