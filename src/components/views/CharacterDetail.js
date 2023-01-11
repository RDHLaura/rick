import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
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
        <div>
          <h2>Personaje con el id {params.id}</h2>
          <p>Con el nombre: {personaje.name}</p>
          <img src={personaje.image} alt={`Imagen de ${personaje.name}`}/>
        </div>
      ) : ('no hay personaje')}

    </>
  )
}

