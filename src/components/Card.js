import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
/**
 @module Card
 */

/**
 * @component
 * @param props se le pasa los datos del personaje y la lista de favoritos para poder gestionarla y que muestre si pertenece a la lista de favoritos
 * @returns {JSX.Element} nodo card que contiene la información del personaje
 */
export function Card (props) {
  const [isFav, setIsFav] = useState(props.Favs
    .split(' ')
    .some(element=> element === (props.id).toString())
  )
  const addFav = (id) => {
    props.setListFavs(props.Favs+' '+id)
    localStorage.favorites =  props.Favs+' '+id;
  }
  /**
   * Elimina un personaje de la lista de favoritos   *
   * @param id identificador del personaje que queremos eliminar
   * @inner
   */
  const deleteFav = (id) => {
    const newList = props.Favs
      .split(' ')
      .filter(element => element!== id.toString())
    props.setListFavs(newList.join(' '))
    localStorage.favorites = newList.join(' ')
  }
  /**
   * cuando se llama se encarga de añadir o elimiar al personaje de los favoritos
   */
  const favActive = () => {
    setIsFav(!isFav);
    (!isFav)? addFav(props.id) : deleteFav(props.id);

  }


  /**
   *
   */
  const [isShowInfo, setIsShowInfo] = useState(false);
  const handleIsShow = () => {
    setIsShowInfo(!isShowInfo);
  }

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
            {(props.type !="") ?
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