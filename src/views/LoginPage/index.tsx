import React, { useState, useEffect } from 'react';
import { Layout, Menu, Form, Input, Button, Checkbox, Breadcrumb } from 'antd';
import EChartsReact from 'echarts-for-react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  LoginForm,
  PageHead,
  LoginButton,
  NameInput,
  PasswordInput,
  ForgetPassword,
  Register,
  Background,
  RememberMe
} from './style';

const { Header } = Layout;

// 登陆表单
const NormalLoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <LoginForm
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <NameInput prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <PasswordInput
          prefix={<LockOutlined className="site-form-item-icon" />}
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
        <LoginButton type="primary" htmlType="submit" className="login-form-button">
          登陆
        </LoginButton>
        <br />
        <Register href="">注册</Register>
        <ForgetPassword className="login-form-forgot" href="">
          忘记密码
        </ForgetPassword>
      </Form.Item>
    </LoginForm>
  );
};

export default function LoginPage() {
  return (<Background>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <PageHead theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key="1"><a href="">图像美学系统</a></Menu.Item>;
          })}
        </PageHead>
      </Header>
    </Layout>
    <NormalLoginForm></NormalLoginForm>
  </Background>);
}
