import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { load } from '@/utils/valid';
import { SEARCH_KEY } from '@/assets/js/constant';
import { RootState } from '../../index'; // 在 store/index.ts 中声明的类型
import { getUserInfoById } from '@/service/userInfo';
import { userStateType } from './interface';

const defaultState: userStateType = {
  // 登录用户id
  userId: '',
  // 登录用户手机号码
  phoneNumber: '',
  // 用户邮箱
  email: '',
  // 用户年龄
  age: '',
  // 历史搜索记录,从本地存储中获取
  searchHistory: load(SEARCH_KEY),
  // 页面加载
  loading: false,
  // 错误信息
  error: ''
};

export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async (params: string, thunkAPI) => {
    const res = await getUserInfoById(params);
    return res;
  }
);

// 借助 createSlice 创建 reducer、action
const userInfoSlice = createSlice({
  name: 'userInfo', // 生成 Action type 的前缀，例如：counter/increment
  initialState: defaultState,
  // 同步 reducer，直接利用dispatch()通过这里的方法来同步修改state
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setSearchHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  },
  // 异步 thunk，用于需要在更新数据前异步处理数据(接口请求属于异步任务，异步请求后对数据进行保存)的情况
  extraReducers: {
    [getUserInfo.pending.type]: state => {
      state.loading = true;
    },
    [getUserInfo.fulfilled.type]: (
      state,
      action: PayloadAction<userStateType>
    ) => {
      console.info(action);
      state.userId = action.payload.userId;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.searchHistory = action.payload.searchHistory || '';
    },
    [getUserInfo.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

// Action Creator 用于执行返回描述如何更新 state 的 Action
export const { setUserId, setPhoneNumber, setEmail, setAge, setSearchHistory } =
  userInfoSlice.actions;

// Selector，作为 useSelector 读取数据的函数参数
export const userInfoSelector = (state: RootState) => state.userInfo;

// Reducer，真正执行修改 state 的纯函数
export default userInfoSlice.reducer;
