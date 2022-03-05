import styled from 'styled-components';
import { Button, Input, Form, Menu, Checkbox } from 'antd';

export const LoginForm = styled(Form)`
  width:350px;
  display: table;
  margin: 200px auto;
  background-color:#ffffff;
  border-radius:10px;
`;

export const LoginButton = styled(Button)`
  display: table;
  margin:0 auto;
  width:80%;
`;

export const PageHead = styled(Menu)`
  font-size:20px;
  margin-left:60px;
`;

export const NameInput = styled(Input)`
  width: 80%;
  margin-top: 20px;
  margin-left:10%;
`;

export const RememberMe = styled(Checkbox)`
  margin-left:10%;
`;

export const PasswordInput = styled(Input)`
  width: 80%;
  margin-left:10%;
`;

export const Register = styled.a`
  margin-left:100px;
`;

export const ForgetPassword = styled.a`
  margin-left:60px;
`;

export const Background = styled.div`
  background-image:url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1112%2F051519134149%2F1Z515134149-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648915129&t=cad526b5fca839365ebdf54c285c204c");
  position:fixed;
  width:100%;
  height:100%;
  min-width: 1000px;
  background-color: #fff;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
`;
