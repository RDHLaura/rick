import axios from 'axios'; //biblioteca que permite realizar solicitudes a un endpoint determinado

//funciones que generan las peticiones a la api que serán llamadas desde los componentes

//Se hace una petición, se reciben los datos y se cargan los datos en un estado del componente,
//para esto hay que haber creado un estado en el component
const listarPersonajes = async ( setPersonajes, pag, busqueda, setInfo) => {
  //con el await le indicamos a la función asíncrona que espere la respuesta de la api
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

  //parámetros de búsqueda
  //inputSearch.name
  //inputSearch.status : alive, dead, unknown
  //inputSearch.species (Crear un desplegable con las especies)
  //inputSearch.type (Crear otro desplegable)
  //inputSearch.gender : female, male, genderless or unknown
}
const listarFavoritos = async ( setPersonajes, favorites) => {
  const listFavorites = favorites
    .trim()
    .split(' ')
    .join(',')
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${listFavorites}`);
  const results = peticion.data;
  setPersonajes(results);
}

const detallepersonaje = async (id, state) =>{
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  state(peticion.data)
}

export{
  listarPersonajes,
  detallepersonaje,
  listarFavoritos
}