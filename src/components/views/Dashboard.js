import {Link} from "react-router-dom";
import {LOGOUT, PROFILE} from "../../config/router/paths";
import {useEffect, useState} from "react";
import {listarPersonajes} from "../../functions/requestsAPI";
import {Card} from "../Card";
import {Paginate} from "../Paginate";
import SearchBar from "../SearchBar";
import {useAuthContext} from "../../contexts/authContext";
import {Title} from "../Title";


export  function Dashboard() {
  //Personajes
  const [personajes, setPersonajes] = useState(null);
  const [info, setInfo] = useState(null);

  //paginación
  let [page, setPage] = useState(1);
  const handleNextPage = () =>{ setPage(++page) }
  const handlePreviusPage = () =>{ setPage(--page) }

  //Búsqueda
  let [busqueda, setBusqueda] = useState({
    optionFilter: "name",
    name: "",
    type: "",
    species: "",
    optionStatus: "",
    optionGender: ""
  });

  const handleSearch = (event) => {
    const value = event.target.value
    setBusqueda({
      ...busqueda,
      [event.target.name]: value});
    setPage(1) //se establece la pag a 1 para que muestre desde la pimera pag de los resultados de la búsqueda
  }

  //Favoritos
  const favs = localStorage.favorites || "";
  const [listFav, setListFavs] = useState(favs);
  const handleSetFavs = (e)=> {setListFavs(e)}

  //Petición de personajes con búsqueda dinámica
  useEffect(() => {
    listarPersonajes(setPersonajes, page, busqueda, setInfo);
  }, [busqueda, page]) //cuando cambien se vuelve a ejecutar useEffect

  const {logout} = useAuthContext()
  useEffect(() => {
    const timer = setTimeout(() => {
      logout()
    }, 3600000);
    return () => clearTimeout(timer);
  }, []);




  return (
    <main className="mainFrame">
      <header className="header">
        <Title />
      </header>
      <SearchBar
        busqueda = {busqueda}
        handleSearch = {handleSearch} />
      { //Paginación
        (info === null) ?
          <p>No hay páginas</p>
          :
          <Paginate
            page = {page}
            pages = {info.pages}
            previus = {handlePreviusPage}
            next = {handleNextPage}
          />
      }
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
}