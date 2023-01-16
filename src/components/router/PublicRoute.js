import {useAuthContext} from "../../contexts/authContext";
import {Navigate, Outlet} from "react-router-dom";
import {DASHBOARD} from "../../config/router/paths";

/**
 * Comprobamos si el usuario está autenticado, si es así lo redirige a la seccion privada de la web,
 * en caso contrario devuelve el outlet que será la sección pública
 */
export function PublicRoute(){
    const {isAuthenticated} = useAuthContext();

    if(isAuthenticated) {
        return <Navigate to={DASHBOARD} />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}