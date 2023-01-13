import React, { useEffect, useState } from 'react'
import {listarFavoritos} from "../../functions/requestsAPI";
import {Card} from "../Card";
import {Title} from "../Title";



const Favoritos = function () {
  //Personajes
  const [personajes, setPersonajes] = useState(null);
  //Favoritos
  const favs = localStorage.favorites || "";
  const [listFav, setListFavs] = useState(favs);
  const handleSetFavs = (e)=> {setListFavs(e)}

  useEffect(() => {
    listarFavoritos(setPersonajes, listFav);

  }, [ listFav])

  return (
    <main className="mainFrame">
      <header className="header">
       <Title />
      </header>
      <div className="grid-content">
        { //listado de cartas
          personajes !== null ? (
            personajes.map((personaje) =>
              (
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
              )
            )) : ('Cargando...')
        }
      </div>
    </main>
  );
};

export default Favoritos