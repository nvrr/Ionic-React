import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UIProvider } from './MyContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <UIProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </UIProvider>
  
);