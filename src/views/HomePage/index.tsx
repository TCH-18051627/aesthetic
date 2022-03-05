// import React from 'react';
import Header from '@/components/Header';
// import LoginPage from '../LoginPage';
import NotFind from '@/components/NotFind';
import CommunityPage from '@/views/CommunityPage';
import UserCenterPage from '@/views/UserCenterPage';
import ClassifyPage from '@/views/ClassifyPage';
import EnhancePage from '@/views/EnhancePage';
import EvaluatePage from '@/views/EvaluatePage';
import GenerationPage from '@/views/GenerationPage';
import { useRoutes, Navigate } from 'react-router-dom';
import { HomePageWrap } from './style';

export default function HomePage() {
  const GetRoutes = () => {
    // const isLogin = true;
    const routes = useRoutes([
      { path: '/', element: <Navigate to="/user" /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '/user', element: <UserCenterPage /> },
      { path: 'evaluate', element: <EvaluatePage /> },
      { path: 'generation', element: <GenerationPage /> },
      { path: 'enhance', element: <EnhancePage /> },
      { path: 'classify', element: <ClassifyPage /> },
      // 重定向
      // { path: 'home', element: <Navigate to="/"></Navigate> },
      // 404找不到
      { path: '*', element: <NotFind /> }
    ]);
    return routes;
  };
  return (
    <>
      <Header></Header>
      <HomePageWrap>
        <GetRoutes />
      </HomePageWrap>
    </>
  );
}
