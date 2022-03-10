import React from "react";

export interface userInfo {
  // 登录用户id
  userId: string;
  // 登录用户手机号码
  phoneNumber: string;
  // 用户邮箱
  email: string;
  // 用户年龄
  age: string;
  // 历史搜索记录,从本地存储中获取
  searchHistory?: string;
}