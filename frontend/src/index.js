import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.css';

import { AppDataProvider } from './AppDataProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


