import React, {useEffect} from 'react';
import {useAuthContext} from "../contexts/authContext";
export  function Logout() {
    const {logout} = useAuthContext();
    //cuando el componente se rendeciza llama a la función logout del contexto
    useEffect(() => logout());
    return null;
}

