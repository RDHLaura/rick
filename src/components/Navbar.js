import {Link} from "react-router-dom";
import {FAVORITES, HOME, LOGIN, LOGOUT, PROFILE, REGISTER} from "../config/router/paths";
import {useEffect, useState} from "react";
import {useAuthContext} from "../contexts/authContext";
import {useThemeContext} from "../contexts/themeContext";

export function Navbar(){
  const {isAuthenticated} = useAuthContext()

  //desplegar menú móvil
  const [menuDesplegado, setMenuDesplegado] = useState(false)
  const desplegar = () =>{
    setMenuDesplegado(!menuDesplegado);
  }
  //theme light/dark
  const {setTheme, changeTheme} = useThemeContext()
  useEffect(()=>{
    setTheme();
  },[])
  const handleChangeTheme = ()=>{
    changeTheme();
  }

  //establezco un temporizador para desloguear después de una hora
  const {logout} = useAuthContext()
  useEffect(() => {
    const timer = setTimeout(() => {
      logout()
    }, 3600000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="navbar">
        <Link className="logo" to={HOME}>

          <p className="logo-name">Rick and Morty</p>

        </Link>
        <button className='button-burguer' onClick={desplegar}><i className="fa-solid fa-bars"></i></button>
        <nav className={((menuDesplegado)? 'nav activo' : 'nav')} id="nav">
          <ul className="list_navbar">
            <li className="nav-bar-link"><button type="button" onClick={handleChangeTheme}><img className="img_theme"
              src={require("../assets/images/day-and-night (1).png")}  /></button></li>
            { (!isAuthenticated) ?
              <>
                <li className="nav-bar-link"><Link to={LOGIN} >Iniciar Sesión</Link></li>
                <li className="nav-bar-link"><Link to={REGISTER} >Registro</Link></li>
              </>
              :
              <>
                <li className="nav-bar-link"><Link to={FAVORITES}>Favoritos</Link></li>
                <li className="nav-bar-link"><Link to={LOGOUT}>Cerrar Sesión</Link></li>
                <li className="nav-bar-link"><Link to={PROFILE}><img className="perfil-img nav-img"
                                                                           src= {require("../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png")}
                                                                           alt="Foto de perfil de usuario" /></Link></li>
              </>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}