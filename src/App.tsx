// import { useState } from 'react';
// import NotFind from './components/NotFind';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  const isLogin = false;
  return <Router>{isLogin ? <HomePage /> : <LoginPage />}</Router>;
}

export default App;
