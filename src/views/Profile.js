import {Link} from "react-router-dom";
import {LOGOUT} from "../config/router/paths";
import {useAuthContext} from "../contexts/authContext";

export  function Profile() {





    return (
        <>
            <h1>Profile</h1>
            <Link to={LOGOUT}>Cerrar sesión</Link>
        </>
    );
}
