import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, userInfoSelector } from '@/store/reducers/userInfo';

export default function UserCenterPage() {
  // 相当于从动态的读取userInfo的state，每当state有值改变时，会动态改变界面上的显示值
  const userInfo = useSelector(userInfoSelector);

  // 导出一个dispatch方法，用于传递特定的action来改变对应state的值
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo('123'));
  }, []);
  return (
    <>
      <h1>个人中心</h1>
      {/* <div>
        用户id: {userInfo.userId + ';'}
        手机号: {userInfo.phoneNumber + ';'}
        邮箱: {userInfo.email + ';'}
      </div> */}
    </>
  );
}
