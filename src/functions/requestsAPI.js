import axios from 'axios'; //biblioteca que permite realizar solicitudes a un endpoint determinado

//funciones que generan las peticiones a la api que serán llamadas desde los componentes

//Se hace una petición, se reciben los datos y se cargan los datos en un estado del componente,
//para esto hay que haber creado un estado en el component
/**
 * @async
 * @function
 * @param setPersonajes actualiza el estado donde se almacenan los personajes
 * @param pag la pag sobre la que se quiere mostrar la info
 * @param busqueda parámetros de la búsqueda
 * @param setInfo actualiza el estado donde se almacena la info de la información que devuelve la api, contiene la paginación
 */
const listarPersonajes = async ( setPersonajes, pag, busqueda, setInfo) => {
  //con await le indicamos a la función asíncrona que espere la respuesta de la api
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character?
page=${pag}
&name=${busqueda.name}
&status=${busqueda.optionStatus}
&species=${busqueda.species}
&type=${busqueda.type}
&gender=${busqueda.optionGender}`);

  const {info, results} = peticion.data;
  setPersonajes(results);
  setInfo(info);
}

/**
 * @async
 * @function
 * Pide a la API la información de los personajes que están almacenados en la lista de favoritos del usuario
 * @param setPersonajes actualiza el estado donde se almacenan los personajes
 * @param favorites lista con los ids de los personajes favoritos que se quieren obtener
 */
const listarFavoritos = async ( setPersonajes, favorites, page, setPages) => {

  if(favorites===""){
    setPersonajes(null)
  }else{
    const listFavorites = favorites
      .trim()
      .split(' ');
    setPages(Math.ceil(listFavorites.length/20));
    const listPaginated = listFavorites.slice((page-1)*20, (20*page));
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${listPaginated.join(',')}`);
    const results = peticion.data;
    setPersonajes(results);
  }

}

/**
 * @async
 * @function detallepersonaje
 * Función asincrona que realiza la petición a la API de un personaje concreto
 * @param id id del personaje que se quiere mostrar
 * @param state
 */
const detallepersonaje = async (id, setPersonaje) =>{

  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  setPersonaje(peticion.data)
}

export{
  listarPersonajes,
  detallepersonaje,
  listarFavoritos
}