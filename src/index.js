import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/main.sass'
import App from './App';
import {HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Se renderiza el elemento root
 * Este contiene el modo estricto que destaca los problemas potenciales de la aplicación  y
 * hasrouter que evita que al recargar la pág esta dé un código 404 ya que solicita la url al servidor pra ello
 * utiliza el hash # en la url para renderizar los componentes y evita así que el navegador envíe la petición al servidor
 */
root.render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </React.StrictMode>
);



