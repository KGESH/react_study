import type { Routes } from 'types/Routes';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PickUp from 'pages/PickUp';
import Store from 'pages/Store';

const AppRoutes: Routes[] = [
{
  path: '/',
  exact: true,
  component: Home,
},
{
  path: '/Login',
  exact: true,
  component: Login,
},
{
  path: 'PickUp',
  exact: true,
  component: PickUp,
},
{
  path: '/Store',
  exact: true,
  component: Store,
},
]


export default AppRoutes;