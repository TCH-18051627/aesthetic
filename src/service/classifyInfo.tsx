import { get } from './base';
import { ClassifyStateType } from '@/store/reducers/classifyInfo/interface';

export function getClassifyInfo(label: string): Promise<ClassifyStateType> {
  // 此处前端通过get向该路由发送请求
  return get('/api/getClassifyInfo', label);
}
