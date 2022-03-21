import React, { Suspense, useMemo } from 'react';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { useRoutes, Navigate } from 'react-router-dom';
import { loginRoutes, routes, screenRoutesByRole } from '@/router';
import { HomePageWrap } from './style';
import { useAuth } from '@/utils/auth';
import store from '@/store';
import { useSelector } from 'react-redux';
import { loginInfoSelector } from '@/store/reducers/loginInfo';
import LoginPage from '../LoginPage';

export default function HomePage() {
  // const { role } = store.getState().userInfo;
  // const curRoutes = useMemo(() => {
  //   return screenRoutesByRole(routes);
  // }, [role]);
  const { signOut, isLogin } = useAuth();
  const homeRoutes = useRoutes(routes);
  const loginInfo = useSelector(loginInfoSelector);
  const loginPageRoutes = useRoutes(loginRoutes);

  if (loginInfo.isLogin) {
    return (
      <>
        <Header></Header>
        <Suspense fallback={<Loading />}>
          <HomePageWrap>{homeRoutes}</HomePageWrap>
        </Suspense>
      </>
    );
  }

  return <Suspense fallback={<Loading />}>{loginPageRoutes}</Suspense>;
}
