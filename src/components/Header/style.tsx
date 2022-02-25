import styled from 'styled-components';
import { SearchOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const HeaderFixedMask = styled.div`
  width: 100%;
  position: fixed;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  background-color: #323335;
  width: 100%;
  height: 50px;
`;

export const HeaderTitle = styled.div`
  display: inline-flex;
  text-align: left;
  width: 850px;
  margin-left: 40px;
  color: #fff;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  width: 28px;
`;

export const CloudUploadIcon = styled(CloudUploadOutlined)`
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

export const RegisterButton = styled(Button)`
  height: 34px;
  margin-left: 10px;
`;
