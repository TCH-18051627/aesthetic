import styled from 'styled-components';
import { Button } from 'antd';

export const LogoIcon = styled.i`
  font-size: 24px;
  margin-left: 20px;
  color: aqua;
`;

export const HeaderFixedMask = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(50, 51, 53, 0.95);
  width: 100%;
  height: 50px;
`;

export const HeaderTitle = styled.div`
  display: inline-flex;
  text-align: left;
  font-size: 16px;
  width: 1350px;
  margin-left: 20px;
  color: #fff;
`;

export const SearchIcon = styled.i``;

export const CloudUploadIcon = styled.i`
  font-size: 34px;
  color: #fff;
`;

export const SearchButtonStyle = { marginLeft: '6px' };

export const SearchSelectStyle = {
  width: '290px'
};

export const SearchSelectWrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 20px 0 20px;
  width: 320px;
  height: 34px;
  background-color: #fff;
`;

export const LoginButton = styled(Button)`
  height: 34px;
  color: #fff;
  margin-left: 10px;
`;

export const UICurPageTitle = styled.div`
  padding: 0 20px 10px 20px;
  background-color: #fff;
  font-size: 30px;
  box-shadow: 0px 4px 7px -6px #888;
`;
