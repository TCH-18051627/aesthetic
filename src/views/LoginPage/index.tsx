import React, { useState, useEffect } from 'react';
import { Layout, Menu, Form, message } from 'antd';
// import EChartsReact from 'echarts-for-react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  LoginForm,
  PageHead,
  LoginButton,
  NameInput,
  PasswordInput,
  ForgetPassword,
  UIFooterWrap,
  Register,
  Background,
  RememberMe
} from './style';
import { useAuth } from '@/utils/auth';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { setIsLogin } from '@/store/reducers/loginInfo';
import { useDispatch } from 'react-redux';
import { LOGIN_KEY } from '@/assets/js/constant';
import storage from 'good-storage';

const { Header } = Layout;

export default function LoginPage() {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state: any = location.state;
  const from = state ? state.from : '/';

  const onLoginClick = async () => {
    const sleep = async (interval: number) => {
      return new Promise(resolve => {
        setTimeout(resolve, interval);
      });
    };

    const hide = message.loading('正在登录', 0);
    setTimeout(hide, 1500);
    await sleep(2000);
    message.success('登录成功', 1);
    await sleep(1000);

    signIn();
    dispatch(setIsLogin(true));
    storage.session.set(LOGIN_KEY, true);
    navigate(from);
  };

  const onRegisterClick = () => {
    navigate('/register');
  };

  // 登陆表单
  const NormalLoginForm = () => {
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };

    return (
      <LoginForm
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <NameInput prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <PasswordInput
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <RememberMe>记住我</RememberMe>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <LoginButton type="primary" htmlType="submit" onClick={onLoginClick}>
            登录
          </LoginButton>
          <UIFooterWrap>
            <Register type="text" onClick={onRegisterClick}>
              注册
            </Register>
            <ForgetPassword type="text">忘记密码</ForgetPassword>
          </UIFooterWrap>
        </Form.Item>
      </LoginForm>
    );
  };

  return (
    <Background>
      <Layout>
        <Header>
          <PageHead theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(1).fill(null).map((_, index) => {
              const key = index + 1;
              return (
                <Menu.Item key="1">
                  <a href="">图像美学系统</a>
                </Menu.Item>
              );
            })}
          </PageHead>
        </Header>
      </Layout>
      <NormalLoginForm></NormalLoginForm>
    </Background>
  );
}
