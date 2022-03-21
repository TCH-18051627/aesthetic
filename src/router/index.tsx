import { lazy } from 'react';
import { RouteProps } from './routes.d';
import { lazyLoad } from '@/utils/valid';
import { USER_ROLE_ENUM } from '@/store/constants';
import CommunityPage from '@/views/CommunityPage';
import store from '@/store';

export const loginRoutes: RouteProps[] = [
  {
    path: '/',
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
    element: lazyLoad(lazy(() => import('@/views/LoginPage')))
  },
  {
    path: '/login',
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
    element: lazyLoad(lazy(() => import('@/views/LoginPage')))
  },
  {
    path: '/register',
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
    element: lazyLoad(lazy(() => import('@/views/RegisterPage')))
  }
];

export const routes: RouteProps[] = [
  {
    path: '/community',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/CommunityPage')))
  },
  {
    path: '/evaluate',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/EvaluatePage')))
  },
  {
    path: '/generation',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/GenerationPage')))
  },
  {
    path: '/enhance',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/EnhancePage')))
  },
  {
    path: '/classify',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/ClassifyPage')))
  },
  {
    path: '/dataset',
    meta: {
      auth: true,
      roles: [USER_ROLE_ENUM.ADMIN]
    },
    element: lazyLoad(lazy(() => import('@/views/DatasetMange')))
  },
  {
    path: '/user',
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
    element: lazyLoad(lazy(() => import('@/views/UserCenterPage')))
  },
  {
    path: '*',
    meta: {
      auth: false,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
    element: lazyLoad(lazy(() => import('@/components/NotFind')))
  }
];

// 通过用户角色筛选路由
export function screenRoutesByRole(routes: RouteProps[]) {
  const { role } = store.getState().userInfo;

  return routes
    .map(route => {
      if (route.meta) {
        const { roles: canIn, unRoles: cantIn } = route.meta;

        // 以unRoles 优先
        if (Array.isArray(cantIn) && cantIn.includes(role)) return null;

        if (Array.isArray(canIn) && !canIn.includes(role)) return null;
      }

      if (!route.children) return route;
      route.children = screenRoutesByRole(route.children);
      return route;
    })
    .filter(i => i !== null) as RouteProps[];
}
