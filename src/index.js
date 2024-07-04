import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Useeffecthook from './components/hooks/Useffecthook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Useeffecthook></Useeffecthook>
    
  </React.StrictMode>
);


