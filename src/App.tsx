// import { useState } from 'react';
// import NotFind from './components/NotFind';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import { BrowserRouter as Router } from 'react-router-dom';
import DatasetMange from './views/DatasetManage';
import './App.css';

function App() {
  // const isLogin = true;
  // return <Router>{isLogin ? <HomePage /> : <LoginPage />}</Router>;
  return <DatasetMange></DatasetMange>;
}

export default App;
