import { combineReducers } from '@reduxjs/toolkit';
import userInfoSlice from './userInfo';

const allReducer = combineReducers({
  userInfo: userInfoSlice
});
export default allReducer;
