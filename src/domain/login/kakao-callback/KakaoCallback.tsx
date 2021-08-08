import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { client as aplloClient } from 'services/apllo-client/apllo';
import { KakaoLoginMutation } from 'services/apllo-client/KakaoLoginMutation';
import { queryByTestId } from '@testing-library/react';

const KakaoCallback = () => {
  const location = useLocation();
  const { jwt } = queryString.parse(location.search);
  if (jwt) {
    /**
     * 테스트용
     * 쿠키로 바꿔줘야함
     * */
    localStorage.setItem('jwt', jwt as string);
    console.log(`jwt = ${jwt}`);
  }

  return <Redirect to='/' />;
};

export default KakaoCallback;
