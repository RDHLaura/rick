import {Link} from "react-router-dom";
import {LOGOUT} from "../../config/router/paths";

export  function Profile() {





    return (
        <>
            <h1>Profile</h1>
            <Link to={LOGOUT}>Cerrar sesión</Link>
        </>
    );
}
