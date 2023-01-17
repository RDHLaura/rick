import {Link} from "react-router-dom";
import {FAVORITES, HOME, LOGIN, LOGOUT, PROFILE, REGISTER} from "../config/router/paths";
import {useEffect, useState} from "react";
import {useAuthContext} from "../contexts/authContext";
import {useThemeContext} from "../contexts/themeContext";

/**
 * @memberOf Components
 * @name Navbar
 * @function
 * @description Renderiza la navbar, que se encarga de:<br>mostrar su versión de escritorio o móvil<br> cambiar de tema claro a oscuro en toda la página<br> de la navegación, oculta o muestra distintas partes de la página según el usuario esté logueado o no.
 * @returns {JSX.Element}
 */
export function Navbar(){
  const {isAuthenticated} = useAuthContext();

  //desplegar menú móvil
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const desplegar = () =>{
    setMenuDesplegado(!menuDesplegado);
  }
  //theme light/dark
  const {setTheme, changeTheme} = useThemeContext();
  useEffect(()=>{
    setTheme();
  },[]);
  const handleChangeTheme = ()=>{changeTheme();}

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
              src={require("../assets/images/day-and-night (1).png")} alt="change theme"  /></button></li>
            { (!isAuthenticated) ?
              <>
                <li className="nav-bar-link"><Link to={LOGIN} >Iniciar Sesión</Link></li>
                <li className="nav-bar-link"><Link to={REGISTER} >Registro</Link></li>
              </>
              :
              <>
                <li className="nav-bar-link"><Link to={FAVORITES}>Favoritos</Link></li>
                <li className="nav-bar-link"><Link to={LOGOUT}>Cerrar Sesión</Link></li>
                <li className="nav-bar-link">
                  <Link to={PROFILE}>
                    <img className="perfil-img nav-img"
                         src= {require("../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png")}
                         alt="Foto de perfil de usuario" />
                  </Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}