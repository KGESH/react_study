import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';
import Error404 from 'pages/Error404';
import AppRoutes from 'components/router/Routes';
import type { HomeProps } from 'types/Props';



const AppRouter = ({isLoggedIn}: HomeProps) => {

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Switch>
        {AppRoutes.map((route, key) => (
          <Route path={route.path} exact={route.exact}  key={key} component={route.component}/>
        ))}
      <Route component={Error404}/>
      </Switch>
    </>
  );
}

export default AppRouter;