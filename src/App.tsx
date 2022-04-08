// import { useState } from 'react';
// import NotFind from './components/NotFind';
import React from 'react';
import HomePage from './views/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import { RouterAuth } from './router/config';
// import { useAuth } from './utils/auth';

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
