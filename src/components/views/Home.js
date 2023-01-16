import {Link} from "react-router-dom";
import {LOGIN, REGISTER} from "../../config/router/paths";
import {Title} from "../Title";

/**
 * Renderiza la página de inicio
 * @returns {JSX.Element} Página de inicio con los enlaces a login y registro
 */
export  function Home() {
    return (
        <main className="mainFrame container-home">
            <header className="header">
              <div>
                <Title contentTitle="Rick and Morty"/>
              </div>
            </header>
          <img className="imag-portada" src={require("../../assets/images/rick-and-morty-icon-png-images-29.png")} alt="Portada Rick and Morty"/>
            <Link className="form-button" to={LOGIN}>Iniciar sesión</Link>
            <Link className="link link-registro" to={REGISTER}>¿Aún no tienes cuenta?</Link>
        </main>


    );
}
