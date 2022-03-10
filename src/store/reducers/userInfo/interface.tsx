export interface userStateType {
  // 登录用户id
  userId: string;
  // 登录用户手机号码
  phoneNumber: string;
  // 用户邮箱
  email?: string;
  // 用户年龄
  age?: string;
  // 历史搜索记录,从本地存储中获取
  searchHistory?: string;
  // 页面loading
  loading?: boolean;
  // error信息
  error?: string | null;
}
