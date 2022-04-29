import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/react-bootstrap/dist';
import App from './App';
import './Style/Global/Globl.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


