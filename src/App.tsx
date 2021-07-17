import React, { useState } from 'react';
import AppRouter from 'components/router/AppRouter';
import Initializing from 'pages/Initializing';

const App = () => {
  const [isInit, setisInit] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isInit ? (
        <AppRouter isLoggedIn={isLoggedIn}/>

      ) : (
        <Initializing/>

      )}
    </>
  );
};

export default App;
