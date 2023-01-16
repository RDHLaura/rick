
import {FormDataUser} from "../FormDataUser";
import React from "react";

/**
 * Renderiza la página de perfil del usuario que contiene un formulario para que este pueda modificar sus datos
 *
 * @returns {JSX.Element} Pág perfil
 */
export  function Profile() {

    return (
      <main className="mainFrame">
        <h2 className="title ">Perfil</h2>
        <img className="perfil-img" src={require('../../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png')} alt="Foto de perfil de usuario" />
          <h2 className=" title-h2">Información de contacto</h2>
          <FormDataUser />
      </main>
    );
}
