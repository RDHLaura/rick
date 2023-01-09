import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/main.sass'
import App from './App';
import './assets/js/scripts.js'
import 'https://kit.fontawesome.com/26a47be34a.js'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.classList.add('body');
root.classList.add('theme');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

