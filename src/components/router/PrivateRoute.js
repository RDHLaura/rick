import {useAuthContext} from "../../contexts/authContext";
import {Navigate, Outlet} from "react-router-dom";
import {LOGIN} from "../../config/router/paths";


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