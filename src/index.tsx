import { setup } from 'goober';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { shouldForwardProp } from 'goober/should-forward-prop';

setup(
  React.createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => prop['0'] !== '$')
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.debug);
