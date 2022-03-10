import { userStateType } from '@/store/reducers/userInfo/interface';
import { get } from './base';

// 对外暴露一个getUserInfoById接口
export function getUserInfoById(userId: string): Promise<userStateType> {
  // 此处前端通过get向该路由发送请求
  return get('/api/getUserInfoById', userId);
}
