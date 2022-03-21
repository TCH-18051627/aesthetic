import { FC, Fragment } from 'react';
import { useAuth } from '@/utils/auth';
import { routes } from '.';
import { matchRoutes, Navigate, useLocation } from 'react-router-dom';
import { RouteProps } from './routes.d';

export const RouterAuth: FC = ({ children }) => {
  const { isLogin } = useAuth();
  const location = useLocation();
  // 匹配当前层级路由树
  const mathchs = matchRoutes(routes, location);
  // 建议打个断点这里调一下，matchs是返回的层级路由
  // 第一个元素为根路由 最后一个元素为当前路由
  // 所以我们从前往后匹配
  const isNeedLogin = mathchs?.some(item => {
    const route: RouteProps = item.route;

    // 没有配置字段的直接返回
    if (!route.meta) return false;
    // 返回是否需要登录
    return route.meta.auth;
  });

  if (isNeedLogin && !isLogin) {
    console.log('需要登录');
    // 跳转到登录  state保存源路由
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // return children as React.ReactElement
  return <Fragment>{children}</Fragment>;
};
