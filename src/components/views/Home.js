import {Link} from "react-router-dom";
import {LOGIN, LOGOUT} from "../../config/router/paths";

export  function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={LOGIN}>Iniciar sesión</Link>
        </>
    );
}
