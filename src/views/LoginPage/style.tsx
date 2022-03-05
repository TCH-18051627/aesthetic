import styled from 'styled-components';
import image2 from '@/assets/images/image2.jpg';
import { Button, Input, Form, Menu, Checkbox } from 'antd';

export const LoginForm = styled(Form)`
  width: 350px;
  display: table;
  margin: 200px auto;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const LoginButton = styled(Button)`
  display: table;
  margin: 0 auto;
  width: 80%;
`;

export const PageHead = styled(Menu)`
  font-size: 20px;
  margin-left: 60px;
`;

export const NameInput = styled(Input)`
  width: 80%;
  margin-top: 20px;
  margin-left: 10%;
`;

export const RememberMe = styled(Checkbox)`
  margin-left: 10%;
`;

export const PasswordInput = styled(Input)`
  width: 80%;
  margin-left: 10%;
`;

export const UIFooterWrap = styled.div`
  margin-top: 20px;
`;

export const Register = styled(Button)`
  margin-left: 80px;
  :hover {
    color: #1890ff;
  }
`;

export const ForgetPassword = styled(Button)`
  margin-left: 60px;
  :hover {
    color: #1890ff;
  }
`;

export const Background = styled.div`
  background-image: url(${image2});
  position: fixed;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-color: #fff;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
`;
