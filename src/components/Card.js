import React, { useState} from 'react'
import { Link } from 'react-router-dom';

/**
 * @module Components
 */

/**
 * @memberOf module:Components
 * @name Card
 * @function
 * @description Renderiza los datos de un personaje y controla la lista de favoritos para añadir o eliminar un id según la interacción del usuario.
 * @param props se le pasa los datos del personaje y la lista de favoritos para poder gestionarla y que muestre si pertenece a la lista de favoritos
 * @returns {JSX.Element} nodo card que contiene la información del personaje
 */
export function Card (props) {
  const [isFav, setIsFav] = useState(props.Favs.split(' ').some(element=> element === (props.id).toString()))
  const addFav = (id) => {
    updateListFav(props.Favs+' '+id);
  }
  const deleteFav = (id) => {
    const newList = props.Favs.split(' ').filter(element => element!== id.toString());
    updateListFav(newList.join(' '));
  }
  const updateListFav = (newList) => { //actualiza la lista de favoritos
    props.setListFavs(newList);
    localStorage.favorites = newList;
  }

  const favActive = () => { //comprueba si el id ya estaba en la lista de favoritos y llama a add o delete fav según corresponda
    setIsFav(!isFav);
    (!isFav)? addFav(props.id) : deleteFav(props.id);
  }

  //Muestra u oculta la información del personaje cuando el ratón entra o deja el componente
  const [isShowInfo, setIsShowInfo] = useState(false);
  const handleIsShow = () => {setIsShowInfo(!isShowInfo);}

  return(
    <article key={props.id} className='character' onMouseEnter={handleIsShow} onMouseLeave={handleIsShow} >
      <div className="character-content">
        <div className="image_div">
          <img className="image" src={props.image} alt='Foto del personaje'/>
          <a id={props.id} className={(isFav)? "fa-solid fa-heart fa-heart-active" : "fa-solid fa-heart" } onClick={ favActive } ></a>
          <h2 className="character-name">{props.name}</h2>
        </div>

        <fieldset className={isShowInfo ? "information-box" : "information-box information-box--hidden"}>
          <Link to={`/dashboard/character/${props.id}`} className="link-card">
            <div className="information-p">
              <p>Status: </p>
              <p>{props.status}</p>
            </div>
            <div className="information-p">
              <p>Gender: </p>
              <p>{props.gender}</p>
            </div>
            <div className="information-p">
              <p>Specie: </p>
              <p>{props.species}</p>
            </div>
            {(props.type !== "") ?
              <div className="information-p">
                <p>Type: </p>
                <p>{props.type}</p>
              </div>
            : null }
            <div className="information-p">
              <p>Location: </p>
              <p>{props.location.name}</p>
            </div>
          </Link>
        </fieldset>
      </div>
    </article>

  )
}