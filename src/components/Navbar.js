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

  return (
    <>
      <header className="navbar">
        <Link className="logo" to={HOME}>
          {/*<img className="logo-img" src={require("../assets/images/logo.svg")} alt="Logo"/>*/}
          <p className="logo-name">Rick and Morty</p>
        </Link>
        <button className='button-burguer' onClick={desplegar}><i className="fa-solid fa-bars"></i></button>
        <nav className={((menuDesplegado)? 'nav activo' : 'nav')} id="nav">
          <ul className="list_navbar">
            <li className="nav-bar-link"><button type="button" onClick={handleChangeTheme}><img
              src={require("../assets/images/day-and-night (1).png")} /></button></li>
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
                                                                           src= {require("../assets/images/foto_03evento.png")}
                                                                           alt="Foto de perfil de usuario" /></Link></li>
              </>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}