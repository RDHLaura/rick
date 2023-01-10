import {Link} from "react-router-dom";
import {LOGOUT, PROFILE} from "../../config/router/paths";

export  function Dashboard() {


  return (
    <>
      <h1>Dashboard</h1>
      <Link to={LOGOUT}>Cerrar sesión</Link>
      <Link to={PROFILE}>Perfil</Link>
    </>
  );
}