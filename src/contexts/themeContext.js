import {createContext, isValidElement, useCallback, useContext, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {useAuthContext} from "./authContext";


export const ThemeContext = createContext();

export function ThemeContextProvider ({children}){

  const activedLight = localStorage.lightTheme || 'desactive';
  let [lightTheme, setLightTheme] = useState(activedLight);

  const root = document.getElementById('root');

  const setTheme = useCallback(() => {
    (lightTheme === 'active') ?
      root.classList.add('theme--light') :
      root.classList.add('theme')

  },[]);

  const changeTheme = useCallback(() => {
    (lightTheme === 'desactive')?
      lightTheme='active':
      lightTheme= 'desactive';
    setLightTheme(lightTheme)
    localStorage.lightTheme = lightTheme;
    root.classList.toggle('theme--light');
  }, [])

  //Establezco el valor del contexto se usa useMemo para memorizar el estado del contexto
  // y así no se cree el objeto cada vez que se renderice,
  //de esta forma solo cambia cuando uno de los 3 valores pasados por dependencia cambie
  const value = useMemo(() => ({
    setTheme,
    changeTheme,
    lightTheme
  }),[setTheme, changeTheme, lightTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

//establecemos las propTypes para verificar que el tipo de dato que le pasamos por props
// a AuthContextProvider sea un objeto
ThemeContextProvider.propTypes = {
  children: PropTypes.object
}

//creo un custom hook que devolverá el objeto contexto
export function useThemeContext(){
  return useContext(ThemeContext)
}