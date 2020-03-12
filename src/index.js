import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { SpellProvider } from './contexts/SpellContext';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <SpellProvider>
      <App />
    </SpellProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
