import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/main.sass'
import App from './App';
import './assets/js/scripts.js'
import 'https://kit.fontawesome.com/26a47be34a.js'
import {Footer} from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

