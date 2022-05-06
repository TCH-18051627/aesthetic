import styled from 'styled-components';
import image2 from '@/assets/images/image2.jpg';
import { Button, Input, Form, Menu } from 'antd';

export const RegisterForm = styled(Form)`
  width: 400px;
  display: table;
  margin: 150px auto;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const RegisterButton = styled(Button)`
  display: table;
  margin: 0 auto;
  width: 80%;
  margin-left: -12%;
`;

export const PageHead = styled(Menu)`
  font-size: 20px;
  margin-left: 60px;
`;

export const UIFooterWrap = styled.div`
  margin-top: -20px;
  margin-left: 120px;
`;

export const FormItem = styled(Form.Item)`
  margin-left: -10%;
`;

export const NameItem = styled(Form.Item)`
  margin-top: 20px;
  margin-left: -10%;
`;

export const NormalInput = styled(Input)`
  width: 250px;
`;

export const IntroInput = styled(Input.TextArea)`
  width: 250px;
`;

export const Login = styled(Button)`
  color: blue;
  margin-left: -15px;
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
