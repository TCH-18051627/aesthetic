import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { load } from '@/utils/valid';
import { SEARCH_KEY } from '@/assets/js/constant';
import { RootState } from '../../index'; // 在 store/index.ts 中声明的类型
import { getClassifyInfo } from '@/service/classifyInfo';
import { LoginStateType } from './interface';

const defaultState: LoginStateType = {
  isLogin: false
};

export const getUserInfo = createAsyncThunk(
  'classifyInfo/getClassifyInfo',
  async (params: string, thunkAPI) => {
    const res = await getClassifyInfo(params);
    return res;
  }
);

// 借助 createSlice 创建 reducer、action
const loginInfoSlice = createSlice({
  name: 'loginInfo', // 生成 Action type 的前缀，例如：counter/increment
  initialState: defaultState,
  // 同步 reducer，直接利用dispatch()通过这里的方法来同步修改state
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    }
  },
  // 异步 thunk，用于需要在更新数据前异步处理数据(接口请求属于异步任务，异步请求后对数据进行保存)的情况
  extraReducers: {
    // [getUserInfo.pending.type]: state => {
    //   state.loading = true;
    // },
    // [getUserInfo.fulfilled.type]: (
    //   state,
    //   action: PayloadAction<ClassifyStateType>
    // ) => {
    //   console.info(action);
    //   state.userId = action.payload.userId;
    //   state.phoneNumber = action.payload.phoneNumber;
    //   state.email = action.payload.email;
    //   state.age = action.payload.age;
    //   state.searchHistory = action.payload.searchHistory || '';
    // },
    // [getUserInfo.rejected.type]: (
    //   state,
    //   action: PayloadAction<string | null>
    // ) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // }
  }
});

// Action Creator 用于执行返回描述如何更新 state 的 Action
export const { setIsLogin } = loginInfoSlice.actions;

// Selector，作为 useSelector 读取数据的函数参数
export const loginInfoSelector = (state: RootState) => state.loginInfo;

// Reducer，真正执行修改 state 的纯函数
export default loginInfoSlice.reducer;
