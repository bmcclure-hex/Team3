import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have a CSS file for global styles
import App from './App'; // Import the App component
// Import any other global contexts or configurations you might have

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
