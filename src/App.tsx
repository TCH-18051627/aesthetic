// import { useState } from 'react';
// import NotFind from './components/NotFind';
import React from 'react';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RouterAuth } from './router/config';
import { useAuth } from './utils/auth';

function App() {
  return (
    <Router>
      {/* <RouterAuth> */}
      <HomePage />
      {/* </RouterAuth> */}
    </Router>
  );
}

export default App;
