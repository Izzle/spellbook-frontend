import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { SpellBookListProvider } from './contexts/SpellBookListContext';
import { SpellProvider } from './contexts/SpellContext';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <SpellBookListProvider>
      <SpellProvider>
        <App />
      </SpellProvider>
    </SpellBookListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
