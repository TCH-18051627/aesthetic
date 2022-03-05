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

const { Header } = Layout;

export default function LoginPage() {
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
          <LoginButton type="primary" htmlType="submit">
            登录
          </LoginButton>
          <UIFooterWrap>
            <Register type="text">注册</Register>
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
