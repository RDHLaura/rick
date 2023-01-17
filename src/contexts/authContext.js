import {createContext, useCallback, useContext, useMemo, useState} from "react";
import PropTypes from "prop-types";



/**
 * creo un contexto que contiene un componente Provider
 */
export const AuthContext = createContext();

/**
 * @name AuthContextProvider
 * @description Se crea un contexto que contiene un componente provider, este va a recibir todos los componentes que queramos que consuman el contexto (Se usará para rodear las rutas y así estás podrán obtener el contexto), Contendrá una variable que indica si el usuario ha iniciado sesión y dos funciones login o logout
 * @param children de tipo objeto
 * @returns {JSX.Element} el elemento provider del contexto
 */
export function AuthContextProvider ({children}){
    //almaceno en un estado si el usuario se ha logueado previamente
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('logged')) ?? false;

    const login = useCallback(function (){
        localStorage.setItem('logged', true);
        setIsAuthenticated(true);
    }, [])
    const logout = useCallback(function (){
        localStorage.removeItem('logged');
        setIsAuthenticated(false);
    }, [])

    //Establezco el valor del contexto se usa useMemo para memorizar el estado del contexto y así no se cree el objeto cada vez que se renderice,
    //de esta forma solo cambia cuando uno de los 3 valores pasados por dependencia cambie
    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }),[login,logout,isAuthenticated]);

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

/**
 * Establecemos las propTypes para verificar que el tipo de dato que le pasamos por props a AuthContextProvider sea un objeto
 */
AuthContextProvider.propTypes = {
    children: PropTypes.object
}

/**
 * @name useAuthContext
 * @description custom hook que devolverá el objeto contexto
 * @returns {unknown} contexto authContext
 */
export function useAuthContext(){
    return useContext(AuthContext)
}