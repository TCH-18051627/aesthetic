import { get } from './base';
import { UserStateType } from '@/store/reducers/userInfo/interface';

// 对外暴露一个getUserInfoById接口
export function getUserInfoById(userId: string): Promise<UserStateType> {
  // 此处前端通过get向该路由发送请求
  return get('/api/getUserInfoById', userId);
}
