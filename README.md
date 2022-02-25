# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 首先安装node, 下载最新LTS版本就行

## 安装yarn, `npm install yarn@latest -g`

## 拉取项目后，执行`yarn install`进行依赖包安装

### 执行`yarn start`开启项目

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 下面两个先不用管

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 项目目录结构划分，注意每个组件需要包含的文件(index, interface, style)

```
aesthetic
├─ .eslintignore   //  eslint忽略文件配置
├─ .eslintrc.json   //  eslint配置
├─ .git
├─ .gitignore    // git忽略配置
├─ .prettierrc    //  代码格式化配置
├─ config-overrides.js    // webpack自定义配置
├─ package.json   // 包管理所需模块及配置信息
├─ paths.json   // src路径配置
├─ public
│  ├─ favicon.ico   // 图标
│  └─ index.html    // 入口html文件
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ assets
│  ├─ components  //  公共组件
│  │  ├─ 404
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  ├─ Footer
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  ├─ Header
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  └─ TopTabs
│  │     ├─ index.tsx
│  │     ├─ interface.tsx
│  │     └─ style.tsx
│  ├─ containers
│  ├─ index.css
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ router  //  路由
│  │  ├─ config.js    // 项目路由配置
│  │  ├─ index.js   // 单页面路由注册组件
│  │  └─ permissionAuth.js    // 登录权限控制组件
│  ├─ setupTests.ts
│  ├─ store   
│  │  ├─ actions
│  │  │  ├─ auth.js
│  │  │  ├─ index.js
│  │  │  └─ user.js
│  │  ├─ actionType.js
│  │  ├─ index.js
│  │  └─ reducers
│  │     ├─ index.js
│  │     └─ user.js
│  ├─ styles
│  │  └─ bass.scss
│  ├─ utils   // 工具函数等
│  │  ├─ api.js   // 统一封装API接口调用方法
│  │  ├─ network.js   // axios封装与拦截器配置
│  │  ├─ url.js   // 自动部署服务器环境
│  │  └─ valid.js   // 统一封装公用模块方法
│  └─ views   //  主视图页面
│     ├─ HomePage   // 首页
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     └─ LoginPage    // 登录页面
│        ├─ index.tsx
│        ├─ interface.tsx
│        └─ style.tsx
├─ tsconfig-base.json
├─ tsconfig.json
└─ yarn.lock

```