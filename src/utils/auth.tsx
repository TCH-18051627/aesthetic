import { USER_ROLE_ENUM } from '@/store/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserId,
  setPhoneNumber,
  setEmail,
  setAge,
  setRole,
  setSearchHistory,
  setLoading,
  initUserState
} from '@/store/reducers/userInfo';
import store from '@/store';

/**
 * 这里本该是读取登录态
 * 我们直接写死 每次进来都是未登录
 */

export function useAuth() {
  let isLogin = false;
  const dispatch = useDispatch();

  const signIn = () => {
    isLogin = true;
    dispatch(setUserId('123'));
    dispatch(setEmail('123478374@qq.com'));
    dispatch(setAge('22'));
    dispatch(setPhoneNumber('13777888888'));
    dispatch(setRole(USER_ROLE_ENUM.ADMIN));
  };

  const signOut = () => {
    isLogin = false;
    dispatch(initUserState());
  };

  const canUse = (canUseRole: USER_ROLE_ENUM | USER_ROLE_ENUM[]): boolean => {
    const { role } = store.getState().userInfo;

    if (Array.isArray(canUseRole)) return canUseRole.includes(role);
    return role === canUseRole;
  };

  return {
    signIn,
    signOut,
    isLogin,
    canUse
  };
}
