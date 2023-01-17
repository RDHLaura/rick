import {useEffect, useState} from "react";
import {listarPersonajes} from "../../functions/requestsAPI";
import {Card} from "../Card";
import {Paginate} from "../Paginate";
import SearchBar from "../SearchBar";
import {Title} from "../Title";


/**
 * @memberOf module:Views
 * @name Dashboard
 * @component
 * @description Página principal, renderiza y controla el listado de personajes, la búsqueda dinámica y la paginación
 * @returns {JSX.Element} Página principal
 */
export  function Dashboard() {
  //Personajes
  const [personajes, setPersonajes] = useState(null);
  const [info, setInfo] = useState(null);

  //paginación
  let [page, setPage] = useState(1);
  const handleNextPage = () =>{ setPage(++page) }
  const handlePreviusPage = () =>{ setPage(--page) }

  //Valores de los filtros de búsqueda, se inicializan en vacío salvo el nombre, que será la búsqueda por defecto del txto
  const initialValuesBusqueda= {
    optionFilter: "name",
    name: "",
    type: "",
    species: "",
    optionStatus: "",
    optionGender: ""
  }
  let [busqueda, setBusqueda] = useState(initialValuesBusqueda);
  const [inputError, setInputError] = useState(null)

  /*Cuando el usuario hacec cambios en los filtros de búsqueda se llama a esta función que actualiza los valores inciales*/
  const handleSearch = (event) => {
    const value = event.target.value;
    const regexValidate = /^[^\/"'`$%{}]*$/;
    if (!regexValidate.test(value)) {
      setInputError("Caracter especial inválido.");
      return null;
    }
    setInputError(null)
    setBusqueda({
      ...busqueda,
      [event.target.name]: value});
    setPage(1) //se establece la pag a 1 para que muestre desde la pimera pag de los resultados de la búsqueda
  }

  //Petición de personajes con búsqueda dinámica
  useEffect(() => {
    listarPersonajes(setPersonajes, page, busqueda, setInfo);
  }, [busqueda, page, inputError]) //cuando cambien estos valores se vuelve a ejecutar useEffect

  //Favoritos
  const favs = localStorage.favorites || "";
  const [listFav, setListFavs] = useState(favs);
  const handleSetFavs = (e)=> {setListFavs(e)}


  return (
    <main className="mainFrame">
      <header className="header">
        <Title contentTitle = "Rick and Morty"/>
      </header>
      <p>{inputError}</p>
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