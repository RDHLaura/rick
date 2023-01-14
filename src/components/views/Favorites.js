import React, { useEffect, useState } from 'react'
import {listarFavoritos} from "../../functions/requestsAPI";
import {Card} from "../Card";
import {Title} from "../Title";
import {Link} from "react-router-dom";
import {HOME} from "../../config/router/paths";



const Favoritos = function () {
  //Personajes
  const [personajes, setPersonajes] = useState(null);
  //Favoritos
  const favs = localStorage.favorites || "";

  const [listFav, setListFavs] = useState(favs);
  const handleSetFavs = (e)=> {setListFavs(e)}

  useEffect(() => {
    console.log(personajes)
    listarFavoritos(setPersonajes, listFav);
  }, [ listFav])

  return (
    <main className="mainFrame">
      <header className="header">
       <Title />
      </header>
      {(personajes === null) ?
        <>
          <h2 className="advise"> No tienes ningún personaje favorito <Link className="link link-registro" to={HOME}>aún...</Link></h2>
          <img className="imag-favs" src={require("../../assets/images/RM_foto_favs.png")} alt="Portada Rick and Morty"/>
        </>
        :
        <div className="grid-content">
          { //listado de cartas
            (personajes instanceof Array) ?
                personajes.map((personaje) =>
                    <Card
                      Favs = {listFav}
                      key={personaje.id}
                      id={personaje.id}
                      name={personaje.name}
                      status={personaje.status}
                      species={personaje.species}
                      gender={personaje.gender}
                      location={personaje.location}
                      type={personaje.type}
                      image={personaje.image}
                      setListFavs={handleSetFavs}
                    />
                  ) :
                    <Card
                      Favs = {listFav}
                      key={personajes.id}
                      id={personajes.id}
                      name={personajes.name}
                      status={personajes.status}
                      species={personajes.species}
                      gender={personajes.gender}
                      location={personajes.location}
                      type={personajes.type}
                      image={personajes.image}
                      setListFavs={handleSetFavs}
                    />
          }
        </div>
      }
    </main>
  );
};

export default Favoritos