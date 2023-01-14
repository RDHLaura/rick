import {Link} from "react-router-dom";
import {CONTACT, HOME} from "../config/router/paths";
import instagram_logo from "../assets/images/instagram.svg";
import twitter_logo from "../assets/images/twitter.svg";
import facebook_logo from "../assets/images/facebook.svg";
import youtube_logo from "../assets/images/youtube.svg";


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
            <li><Link className="social-media-link" to={HOME}><img className="logo-instagram" src= {instagram_logo} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-twitter" src={twitter_logo} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-facebook" src={facebook_logo} alt="Logo" /></Link></li>
            <li><Link className="social-media-link" to={HOME}><img className="logo-youtube" src={youtube_logo} alt="Logo" /></Link></li>
          </ul>
        </fieldset>
        <p className="condiciones_uso">Al continuar en nuestra página aceptas nuestras <a className="link link-footer" href="">Condiciones de uso</a></p>
        <Link className="link link-footer" to={CONTACT}>Contacto</Link>
      </nav>
      <p className="copy-right footer-secundary"> 2022. Events. Todos los derechos reservados</p>
    </footer>
)
}