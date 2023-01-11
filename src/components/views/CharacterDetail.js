import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import {detallepersonaje} from "../../functions/requestsAPI";


export function CharacterDetail (){
  const [personaje, setPersonaje] = useState(null)

  const params = useParams(); //devuelve un objeto con los parametros pasados por la url, lo uso para obtener la id del personaje

  useEffect(()=>{
    detallepersonaje(params.id, setPersonaje)
  },[])
  return (
    <>
      {personaje!= null ? (

        <main className="mainFrame">
          <h1 className="title">{personaje.name}</h1>
          <div className="container-character">
            <section className="container-img">
              <img className="img-character" src={personaje.image} alt="Foto del personaje<" />
            </section>

              <section className="container-details">
                <div className="container-info">
                  <div className="fieldset-info ">
                    <p className="title-h3 title-detail ">Status</p>
                    <p className="info">{personaje.status}</p>
                  </div>
                  <div className="fieldset-info">
                    <p className="title-h3 title-detail">Specie</p>
                    <p className="info">{personaje.species}</p>
                  </div>
                  {(personaje.type!== "")?
                  <div className="fieldset-info">
                    <p className="title-h3 title-detail">Type</p>
                    <p className="info">{personaje.type}</p>
                  </div> : null}
                  <div className="fieldset-info">
                    <p className="title-h3 title-detail">Gender</p>
                    <p className="info">{personaje.gender}</p>
                  </div>
                  <div className="fieldset-info">
                    <p className="title-h3 title-detail">origin</p>
                    <p className="info">{personaje.origin.name}</p>
                  </div>
                  <div className="fieldset-info">
                    <p className="title-h3 title-detail">Last known location</p>
                    <p className="info">{personaje.location.name}</p>
                  </div>
                </div>
              </section>
          </div>

        </main>
      ) : ('no hay personaje')}



    </>
  )
}

