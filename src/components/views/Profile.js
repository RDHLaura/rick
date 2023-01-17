
import {FormDataUser} from "../FormDataUser";
import React, {useEffect, useState} from "react";
import {Title} from "../Title";



/**
 * @memberOf module:Views
 * @name Profile
 * @component
 * @description Renderiza la página de perfil del usuario que contiene un formulario para que este pueda modificar sus datos
 * @returns {JSX.Element} Pág perfil
 */
export  function Profile() {
  const [dataUser, setDataUser] = useState(JSON.parse(localStorage.getItem("userData")));
  const [isShowForm, setIsShowForm] = useState(false)
  const handleIsShowForm = () => {setIsShowForm (!isShowForm);}

  return (
    <main className="mainFrame">
      <Title contentTitle="Perfil" />
      <img className="perfil-img" src={require('../../assets/images/88214-sanchez-morty-gourd-smith-citrullus-portal-rick.png')} alt="Foto de perfil de usuario" />
      <h2 className=" title-h2">Información de contacto</h2>
      <section className="container-details">
        <div className="container-info">
          <div className="fieldset-info ">
            <p className="title-h3 title-detail ">Name</p>
            <p className="info">{dataUser.userName}</p>
          </div>
          <div className="fieldset-info">
            <p className="title-h3 title-detail">Fecha de nacimiento </p>
            <p className="info">{dataUser.birthday}</p>
          </div>
          <div className="fieldset-info">
            <p className="title-h3 title-detail">Número de Teléfono</p>
            <p className="info">{dataUser.phone}</p>
          </div>
          <div className="fieldset-info">
            <p className="title-h3 title-detail">Email</p>
            <p className="info">{dataUser.email}</p>
          </div>
        </div>
      </section>
      <button type='button' onClick={handleIsShowForm} className="form-button" >Modificar datos</button>
      {(isShowForm) &&  <FormDataUser setDataUser={setDataUser}/>}
    </main>
  );
}
