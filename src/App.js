import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Home/>
  <Register/>
  <Login/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
