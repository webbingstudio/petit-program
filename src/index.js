import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.css';

const domNode = ReactDOM.createRoot(document.getElementById('root'));
domNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
