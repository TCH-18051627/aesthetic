import React, { useState } from 'react';
import TopTabs from '../TopTabs';
import { Button } from 'antd';
import { LOGIN_KEY } from '@/assets/js/constant';
import storage from 'good-storage';
import SearchSelect from '../SearchSelect';
import { setIsLogin } from '@/store/reducers/loginInfo';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCurPageTitle } from '@/utils/valid';
import {
  LogoIcon,
  HeaderFixedMask,
  HeaderWrap,
  FirstLine,
  HeaderTitle,
  SearchIcon,
  CloudUploadIcon,
  SearchButtonStyle,
  SearchSelectStyle,
  SearchSelectWrap,
  LoginButton,
  UICurPageTitle
} from './style';
import { UserValue } from './interface';

export default function Header() {
  const [value, setValue] = useState<UserValue[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginOutClick = () => {
    dispatch(setIsLogin(false));
    storage.session.set(LOGIN_KEY, false);
    navigate('/login');
  };

  async function fetchUserList(username: string): Promise<UserValue[]> {
    console.log('fetching user', username);

    return fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body =>
        body.results.map(
          (user: {
            name: { first: string; last: string };
            login: { username: string };
          }) => ({
            label: `${user.name.first} ${user.name.last}`,
            value: user.login.username
          })
        )
      );
  }

  return (
    <HeaderFixedMask>
      <HeaderWrap>
        <FirstLine>
          <LogoIcon className="iconfont icon-photography" />
          <HeaderTitle>杂草识别系统</HeaderTitle>
          <SearchSelectWrap>
            <Button
              icon={<SearchIcon className="iconfont icon-fangdajing" />}
              type="text"
              style={SearchButtonStyle}
            />
            <SearchSelect
              mode="multiple"
              value={value}
              placeholder="HDR"
              fetchOptions={fetchUserList}
              onChange={newValue => {
                setValue(newValue);
              }}
              style={SearchSelectStyle}
            />
          </SearchSelectWrap>
          <CloudUploadIcon className="iconfont icon-yunshangchuan" />
          <LoginButton type="text" onClick={onLoginOutClick}>
            登出
          </LoginButton>
        </FirstLine>
        <TopTabs></TopTabs>
        <UICurPageTitle>{getCurPageTitle(location.pathname)}</UICurPageTitle>
      </HeaderWrap>
    </HeaderFixedMask>
  );
}
