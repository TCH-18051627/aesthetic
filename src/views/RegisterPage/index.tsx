import React, { useState, useEffect } from 'react';
import { Layout, Menu, Form, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  Background,
  PageHead,
  RegisterForm,
  RegisterButton,
  FormItem,
  NormalInput,
  NameItem,
  UIFooterWrap,
  Login,
  IntroInput
} from './style';

export default function RegisterPage() {
  const navigate = useNavigate();

  // 注册表单
  const { Header } = Layout;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  };
  /* eslint-enable no-template-curly-in-string */

  const onLoginClick = () => {
    navigate('/login');
  };

  const Demo = () => {
    const onFinish = (values: any) => {
      console.log(values);
    };

    return (
      <RegisterForm
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <NameItem
          name={['user', 'name']}
          label="姓名"
          rules={[{ required: true }]}
        >
          <NormalInput />
        </NameItem>
        <FormItem
          name={['user', 'email']}
          label="邮箱"
          rules={[{ type: 'email' }]}
        >
          <NormalInput />
        </FormItem>
        <FormItem
          name={['user', 'age']}
          label="年龄"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </FormItem>
        <FormItem name={['user', 'password']} label="密码">
          <NormalInput />
        </FormItem>
        <FormItem name={['user', 'introduction']} label="个人简介">
          <IntroInput />
        </FormItem>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <RegisterButton type="primary" htmlType="submit">
            注册
          </RegisterButton>
        </Form.Item>
        <UIFooterWrap>
          如果您已注册?
          <Login type="text" onClick={onLoginClick}>
            单击这里登陆
          </Login>
        </UIFooterWrap>
      </RegisterForm>
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
      <Demo></Demo>
    </Background>
  );
}
