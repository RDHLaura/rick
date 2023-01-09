import {Link} from "react-router-dom";
import {LOGIN, LOGOUT} from "../../config/router/paths";

export  function Home() {
    const root = document.getElementById('root');
    root.classList.add('body');
    root.classList.add('theme');
    return (
        <main className="mainFrame">
            <header className="header">
                <img className="imag-portada" src={require("../../assets/images/rickAndMorty_home.jpg")} alt="Portada Rick and Morty"/>
            </header>
            <Link to={LOGIN}>Iniciar sesión</Link>
        </main>


    );
}
