import {Link} from "react-router-dom";
import {LOGIN, LOGOUT, REGISTER} from "../../config/router/paths";

export  function Home() {
    const root = document.getElementById('root');
    root.classList.add('body');
    root.classList.add('theme');
    return (
        <main className="mainFrame container-home">
            <header className="header">
                <img className="imag-portada" src={require("../../assets/images/rickAndMorty_home.jpg")} alt="Portada Rick and Morty"/>
            </header>
            <Link className="form-button" to={LOGIN}>Iniciar sesión</Link>
            <Link className="link link-registro" to={REGISTER}>¿Aún no tienes cuenta?</Link>
        </main>


    );
}
