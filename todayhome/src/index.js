import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './Main.js';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
