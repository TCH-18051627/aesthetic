import React, { useState, useEffect } from 'react';
import { Layout, Menu, Form } from 'antd';
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

  const onLoginClick = () => {
    signIn();
    dispatch(setIsLogin(true));
    storage.session.set(LOGIN_KEY, true);
    navigate(from);
  };

  const onRegisterClick = () => {
    navigate('/register');
  };

  // ็ป้่กจๅ
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
            <RememberMe>่ฎฐไฝๆ</RememberMe>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <LoginButton type="primary" htmlType="submit" onClick={onLoginClick}>
            ็ปๅฝ
          </LoginButton>
          <UIFooterWrap>
            <Register type="text" onClick={onRegisterClick}>
              ๆณจๅ
            </Register>
            <ForgetPassword type="text">ๅฟ่ฎฐๅฏ็?</ForgetPassword>
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
                  <a href="">ๅพๅ็พๅญฆ็ณป็ป</a>
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
