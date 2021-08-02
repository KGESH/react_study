import React, { useEffect, useState } from 'react';
import AppRouter from 'components/router/AppRouter';
import Loading from 'components/loading-page/LoadingPage';
import { Auth } from 'services/firebase/Firebase';
import { useHistory } from 'react-router-dom';
import KakaoSdkInit from 'services/kakao/KakaoSdkInit';
import useExternalScript from 'hooks/useExternalScript';
const App = () => {
  const [isInit, setIsInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log(user);
        history.push('/');
      } else {
        setIsLoggedIn(false);
      }
      setIsInit(true);
      console.log('App init');
    });
  });

  return <>{isInit ? <AppRouter isLoggedIn={isLoggedIn} /> : <Loading />}</>;
};

export default App;
