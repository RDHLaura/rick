import {Link} from "react-router-dom";
import {LOGOUT} from "../../config/router/paths";

export  function Profile() {
  const dataUser = JSON.parse(localStorage.getItem("userData"))
  console.log(dataUser)


  //TODO meter el jsdoc

  //TODO iniciar sesion si hay usuario registrado

//TODO Hacer el perfil de usuario ver como subir y almacenar imagen en localstorage
    return (
      <main className="mainFrame">
        <h2 className="title ">Perfil</h2>
        <img className="perfil-img" src= {require("../../assets/images/morty_navbar.jpg")} alt="Foto de perfil de usuario" />
          <h2 className=" title-h2">Información de contacto</h2>
          <form className="form-perfil-update">
            <div className="columns">
              <section className="column column-1">
                <fieldset className="fieldset">
                  <legend>Nombre</legend>
                  <input type="text" className="form-input" value={dataUser.userName} />
                </fieldset>

                <fieldset className="fieldset">
                  <legend>Email</legend>
                  <input type="email" className="form-input" value={dataUser.email} />
                </fieldset>
              </section>

              <section className="column column-2">
                <fieldset className="fieldset">
                  <legend>Fecha de nacimiento</legend>
                  <input type="text" className="form-input" value={dataUser.birthday} />
                </fieldset>
                <fieldset className="fieldset">
                  <legend>Teléfono</legend>
                  <input type="number" className="form-input" value={dataUser.phone} />
                </fieldset>
              </section>
            </div>
            <button className="form-button" type="submit">Guardar</button>
          </form>


      </main>
    );
}
