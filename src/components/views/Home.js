import {Link} from "react-router-dom";
import {LOGIN, LOGOUT, REGISTER} from "../../config/router/paths";
import {Title} from "../Title";

export  function Home() {
    const root = document.getElementById('root');
    root.classList.add('body');
    root.classList.add('theme');
    return (
        <main className="mainFrame container-home">

            <header className="header">
              <div>
                <Title />
              </div>

            </header>
          <img className="imag-portada" src={require("../../assets/images/rick-and-morty-icon-png-images-29.png")} alt="Portada Rick and Morty"/>
            <Link className="form-button" to={LOGIN}>Iniciar sesión</Link>
            <Link className="link link-registro" to={REGISTER}>¿Aún no tienes cuenta?</Link>
        </main>


    );
}
