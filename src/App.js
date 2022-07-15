import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Home/>
  <Register/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
