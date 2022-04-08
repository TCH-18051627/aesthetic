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
│  │  ├─ fonts
│  │  ├─ images
│  │  ├─ js
│  │  └─ scss
│  ├─ components
│  │  ├─ Footer
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  ├─ Header
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  ├─ Loading
│  │  │  ├─ index.tsx
│  │  │  └─ style.tsx
│  │  ├─ NotFind
│  │  │  ├─ index.tsx
│  │  │  ├─ interface.tsx
│  │  │  └─ style.tsx
│  │  ├─ SearchSelect
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
│  ├─ router
│  │  ├─ config.tsx   // 项目路由配置
│  │  ├─ index.tsx    // 单页面路由注册组件
│  │  └─ routes.d.tsx
│  ├─ service
│  │  ├─ base.tsx
│  │  ├─ classifyInfo.tsx
│  │  ├─ interface.tsx
│  │  └─ userInfo.tsx
│  ├─ setupTests.ts
│  ├─ store
│  │  ├─ constants.tsx
│  │  ├─ index.tsx
│  │  └─ reducers
│  │     ├─ classifyInfo
│  │     │  ├─ index.tsx
│  │     │  └─ interface.tsx
│  │     ├─ index.tsx
│  │     ├─ loginInfo
│  │     │  ├─ index.tsx
│  │     │  └─ interface.tsx
│  │     └─ userInfo
│  │        ├─ index.tsx
│  │        └─ interface.tsx
│  ├─ styles
│  │  └─ bass.scss
│  ├─ utils
│  │  ├─ api.js
│  │  ├─ auth.tsx
│  │  ├─ network.js
│  │  ├─ url.tsx
│  │  └─ valid.tsx
│  └─ views
│     ├─ ClassifyPage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  ├─ style.tsx
│     │  ├─ testData
│     │  │  └─ data.tsx
│     │  └─ utils
│     ├─ CommunityPage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     ├─ DatasetMange
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     ├─ EnhancePage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     ├─ EvaluatePage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  ├─ style.tsx
│     │  ├─ testData
│     │  │  └─ data.tsx
│     │  └─ utils
│     │     └─ createOption
│     │        ├─ index.tsx
│     │        └─ interface.tsx
│     ├─ GenerationPage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  ├─ style.tsx
│     │  └─ testData
│     │     └─ data.tsx
│     ├─ HomePage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     ├─ LoginPage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     ├─ RegisterPage
│     │  ├─ index.tsx
│     │  ├─ interface.tsx
│     │  └─ style.tsx
│     └─ UserCenterPage
│        ├─ index.tsx
│        ├─ interface.tsx
│        └─ style.tsx
├─ tsconfig-base.json
├─ tsconfig.json
└─ yarn.lock

```