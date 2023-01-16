import {createContext,  useCallback, useContext, useMemo, useState} from "react";
import PropTypes from "prop-types";

/**
 * creo un contexto que contiene un componente Provider
 */
export const ThemeContext = createContext();

/**
 * Se crea un contexto que contiene un componente provider,
 * (Se usará para rodear las rutas y así estás podrán obtener el contexto),
 * Contendrá una variable que indica si el tema claro está activado y una función que lo cambia
 * @param children componentes que queramos que consuman el contexto
 * @returns {JSX.Element} el elemento provider del contexto
 */
export function ThemeContextProvider ({children}){

  const activedLight = localStorage.lightTheme || 'desactive';
  let [lightTheme, setLightTheme] = useState(activedLight);

  const root = document.getElementById('root');

  //si se activa cambia la clase del elemento root
  const setTheme = useCallback(() => {
    (lightTheme === 'active') ?
      root.classList.add('theme--light') :
      root.classList.add('theme')

  },[]);

  //cambia de active a desactive la variable lightTheme y cambia la clase del root
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