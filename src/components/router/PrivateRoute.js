import {useAuthContext} from "../../contexts/authContext";
import {Navigate, Outlet} from "react-router-dom";
import {LOGIN} from "../../config/router/paths";

/**
 * Consume el contexto authContext para saber si el usuario se ha logueado, si es así, tendrá acceso a las rutas privadas, en caso contrario
 * se redirige al login
 */
export function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to={LOGIN} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}