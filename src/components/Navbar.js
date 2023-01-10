import {Link} from "react-router-dom";
import {HOME, LOGIN, LOGOUT, REGISTER} from "../config/router/paths";
import {useState} from "react";
import {useAuthContext} from "../contexts/authContext";

export function Navbar(){
  const {isAuthenticated} = useAuthContext()
  //desplegar menú móvil
  const [menuDesplegado, setMenuDesplegado] = useState(false)
  const desplegar = () =>{
    setMenuDesplegado(!menuDesplegado);
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
            <li className="nav-bar-link"><button type="button" onClick="claro_oscuro()"><img
              src={require("../assets/images/day-and-night (1).png")} /></button></li>
            { (!isAuthenticated) ?
              <>
                <li className="nav-bar-link"><Link to={LOGIN} >Iniciar Sesión</Link></li>
                <li className="nav-bar-link"><Link to={REGISTER} >Registro</Link></li>
              </>
              :
              <>
                <li className="nav-bar-link"><Link to="./favoritos.html">Favoritos</Link></li>
                <li className="nav-bar-link"><Link to={LOGOUT}>Cerrar Sesión</Link></li>
                <li className="nav-bar-link"><Link to="./perfil.html"><img className="perfil-img nav-img"
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