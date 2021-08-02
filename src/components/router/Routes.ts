import type { Routes } from 'types/Routes';
import Home from 'domain/home/Home';
import Login from 'domain/login/Login';
import PickUp from 'domain/pickup/PickUp';
import Store from 'domain/store/Store';
import EmailSignUp from 'domain/email-sign-up/EmailSignUp';
import KakaoCallback from 'domain/login/kakao-callback/KakaoCallback';

/**
 * 새로운 페이지를 라우터에 연결할 때
 * 이곳에 추가
 */

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
    path: '/Login/KakaoCallback/',
    exact: false,
    component: KakaoCallback,
  },
  {
    path: '/PickUp',
    exact: true,
    component: PickUp,
  },
  {
    path: '/Store',
    exact: true,
    component: Store,
  },
  {
    path: '/EmailSignUp',
    exact: true,
    component: EmailSignUp,
  },
];

export default AppRoutes;
