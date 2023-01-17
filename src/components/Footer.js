import {Link} from "react-router-dom";
import {CONTACT, HOME} from "../config/router/paths";
import instagram_logo from "../assets/images/instagram.svg";
import twitter_logo from "../assets/images/twitter.svg";
import facebook_logo from "../assets/images/facebook.svg";
import youtube_logo from "../assets/images/youtube.svg";

/**
 * @memberOf Components
 * @name Footer
 * @function
 * @description Renderiza el elemento footer
 * @returns {JSX.Element} footer
 */
export function Footer(){
  return (
    <footer className="box-footer">
      <Link className="logo" to={HOME}>
        <p className="logo-name">Rick and Morty</p>
      </Link>
      <nav className="footer-main">
        <fieldset className="social-media-links">
          <legend className="fieldset legend-redes">Síguenos</legend>
         <ul className="redes" name="redes">
            <li><a className="social-media-link" href="https://instagram.com/" target="_blank"><img className="logo-instagram" src= {instagram_logo} alt="Logo" /></a></li>
            <li><a className="social-media-link" href="https://twitter.com/" target="_blank"><img className="logo-twitter" src={twitter_logo} alt="Logo" /></a></li>
            <li><a className="social-media-link" href="https://facebook.com/" target="_blank"><img className="logo-facebook" src={facebook_logo} alt="Logo" /></a></li>
            <li><a className="social-media-link" href="https://youtube.com/" target="_blank"><img className="logo-youtube" src={youtube_logo} alt="Logo" /></a></li>
          </ul>
        </fieldset>
        <p className="condiciones_uso">Al continuar en nuestra página aceptas nuestras <span className="link link-footer">Condiciones de uso</span></p>
        <Link className="link link-footer" to={CONTACT}>Contacto</Link>
      </nav>
      <p className="copy-right footer-secundary"> 2022. Events. Todos los derechos reservados</p>
    </footer>
)
}