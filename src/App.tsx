import React, { useState } from 'react';
import AppRouter from 'components/router/AppRouter';
import Loading from 'components/loading-page/LoadingPage';

const App = () => {
  const [isInit, setisInit] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isInit ? (
        <AppRouter isLoggedIn={isLoggedIn}/>

      ) : (
        <Loading/>

      )}
    </>
  );
};

export default App;
