import { combineReducers } from '@reduxjs/toolkit';
import loginInfo from './loginInfo';
import userInfoSlice from './userInfo';

const allReducer = combineReducers({
  userInfo: userInfoSlice,
  loginInfo: loginInfo
});
export default allReducer;
