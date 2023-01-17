import React, {useCallback, useEffect, useState} from 'react'
import {listarFavoritos} from "../../functions/requestsAPI";
import {Card} from "../Card";
import {Title} from "../Title";
import {Link} from "react-router-dom";
import {HOME} from "../../config/router/paths";
import {Paginate} from "../Paginate";



/**
 * @memberOf module:Views
 * @name Favoritos
 * @component
 * @description Muestra los personajes almacenados en la lista de favoritos, en caso de que no haya aún ninguno, muestra un mensaje que lo indica con un enlace a la pagina principal. Si existen llama a la función listarFavoritos que recibe un json con la información de todos los personajes de la lista.
 * @returns {JSX.Element}
 */
const Favoritos = function () {

  const [personajes, setPersonajes] = useState(null);

  const favs = localStorage.favorites || "";//almaceno los favoritos del localstorage o inicio la variable como cadena vacia.
  const [listFav, setListFavs] = useState(favs);
  const handleSetFavs = (e) => {setListFavs(e)}

  //paginación
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const nextPage = useCallback(()=>{setPage(prev => prev + 1)}, []);
  const previusPage = useCallback(()=>{setPage(prev => prev - 1)}, []);

  useEffect(() => {
    listarFavoritos(setPersonajes, listFav, page, setPages);
  }, [ listFav, page])

  return (
    <main className="mainFrame">

      <header className="header">
       <Title contentTitle="Favoritos"/>
      </header>
      <Paginate
        page={page}
        pages={pages}
        next={nextPage}
        previus={previusPage}
      />
      {(personajes === null) ?
        <>
          <h2 className="advise"> No tienes ningún personaje favorito <Link className="link link-registro" to={HOME}>aún...</Link></h2>
          <img className="imag-favs" src={require("../../assets/images/RM_foto_favs.png")} alt="Portada Rick and Morty"/>
        </>
        :
        <div className="grid-content">
          { //listado de cartas
            /*si no recibe un array y tampoco es null es porque sçolo hay un personaje almacenado y la api devuelve
            * un único objeto por lo que no se puede mapear */
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