
import {FormDataUser} from "../FormDataUser";
import React from "react";

export  function Profile() {
  const dataUser = JSON.parse(localStorage.getItem("userData")) || {
    userName: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
    password_check: ""
  };

    return (
      <main className="mainFrame">
        <h2 className="title ">Perfil</h2>
        <img className="perfil-img" src={require('../../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png')} alt="Foto de perfil de usuario" />
          <h2 className=" title-h2">Información de contacto</h2>
          <FormDataUser dataUser={dataUser}/>


      </main>
    );
}
