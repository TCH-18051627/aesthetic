import { configureStore } from '@reduxjs/toolkit';
import allReducer from './reducers'; // 引入 reducer 的集合

// 实例化 store，全局唯一
const store = configureStore({
  reducer: allReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 引入Redux调试工具
});

// 导出 Store 中的状态（state）类型
export type RootState = ReturnType<typeof store.getState>;

// 导出更改状态的 Dispatch 方法类型
export type AppDispatch = typeof store.dispatch;

// 监听store的state变化状态
store.subscribe(() => console.info(store.getState()));

// 默认导出 store，用于全局的 Provieder 消费
export default store;
