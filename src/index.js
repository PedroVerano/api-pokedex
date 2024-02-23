import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Details from './pages/Details';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
  </Routes>
  </BrowserRouter>
);
