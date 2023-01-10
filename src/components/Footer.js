import {Link} from "react-router-dom";
import {HOME} from "../config/router/paths";

export function Footer(){
  return (
    <footer className="box-footer">
      <Link className="logo" to={HOME}>
        <img className="logo-img" src={require("../assets/images/logo.svg")} alt="Logo" />
          <p className="logo-name">Events</p>
      </Link>
      <nav className="footer-main">
        <fieldset className="social-media-links">
          <legend className="fieldset legend-redes">Síguenos</legend>
          <ul className="redes" name="redes">
            <li><Link className="social-media-link" to={HOME}><img className="logo-instagram" src= {require("../assets/images/instagram.svg")} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-twitter" src={require("../assets/images/twitter.svg")} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-facebook" src={require("../assets/images/facebook.svg")} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-youtube" src={require("../assets/images/youtube.svg")} alt="Logo" /></Link></li>
          </ul>
        </fieldset>
        <p className="condiciones_uso">Al continuar en nuestra página aceptas nuestras <a className="link link-footer" href="">Condiciones de uso</a></p>
        <a className="link link-footer" href="./contacto.html">Contacto</a>
      </nav>
      <p className="copy-right footer-secundary"> 2022. Events. Todos los derechos reservados</p>
    </footer>
)
}