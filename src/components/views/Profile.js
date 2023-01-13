import {Link} from "react-router-dom";
import {LOGOUT} from "../../config/router/paths";

export  function Profile() {


//TODO hacer evento dependiente del tiempo
  //TODO meter el jsdoc
  //TODO desplegar la app
  //TODO iniciar sesion si hay usuario registrado

//TODO Hacer el perfil de usuario ver como subir y almacenar imagen en localstorage
    return (
        <>
            <h1>Profile</h1>
            <Link to={LOGOUT}>Cerrar sesión</Link>
        </>
    );
}
