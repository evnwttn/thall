import React from 'react';
import ReactDOM from 'react-dom/client';
import { Thall } from './components/Thall';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Thall />
  </React.StrictMode>
);