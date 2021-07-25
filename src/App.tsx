import React, { useEffect, useState } from 'react';
import AppRouter from 'components/router/AppRouter';
import Loading from 'components/loading-page/LoadingPage';
import { Auth } from 'services/firebase/Firebase';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [isInit, setIsInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log('LogIn');
        console.log(user);
        history.push('/');
      } else {
        setIsLoggedIn(false);
        console.log('LogOut');
      }
      setIsInit(true);
      console.log('App init');
    });
  });

  return <>{isInit ? <AppRouter isLoggedIn={isLoggedIn} /> : <Loading />}</>;
};

export default App;
