import {useEffect} from 'react';
import {useAuthContext} from "../../contexts/authContext";

/**
 * Este componente se usa para desloguear al usuario
 * @returns {null}
 */
export  function Logout() {
    const {logout} = useAuthContext();
    //cuando el componente se rendeciza llama a la función logout del contexto
    useEffect(() => logout());
    return null;
}

