import React, { useState } from 'react';
import TopTabs from '../TopTabs';
import { Button } from 'antd';
import SearchSelect from '../SearchSelect';
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
  RegisterButton
} from './style';
import { UserValue } from './interface';

export default function Header() {
  const [value, setValue] = useState<UserValue[]>([]);

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
          <HeaderTitle>图像美学分析系统</HeaderTitle>
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
          <LoginButton type="text">登入</LoginButton>
          <RegisterButton type="primary">注册</RegisterButton>
        </FirstLine>
        <TopTabs></TopTabs>
      </HeaderWrap>
    </HeaderFixedMask>
  );
}
