import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export function Card (props) {
  const [isFav, setIsFav] = useState(props.Favs
    .split(' ')
    .some(element=> element === (props.id).toString())
  )
  const addFav = (id) => {
    props.setListFavs(props.Favs+' '+id)
    localStorage.favorites =  props.Favs+' '+id;
  }

  const deleteFav = (id) => {
    const newList = props.Favs
      .split(' ')
      .filter(element => element!== id.toString())
    props.setListFavs(newList.join(' '))
    localStorage.favorites = newList.join(' ')
  }

  const favActive = () => {
    setIsFav(!isFav);
    (!isFav)? addFav(props.id) : deleteFav(props.id);
  }

  return(
    <article key={props.id} className='character'>
      <div className="character-content">
        <div className="image_div">
          <img className="image" src={props.image} alt='Foto del personaje'/>
          <a id={props.id} className={(isFav)? "fa-solid fa-heart fa-heart-active" : "fa-solid fa-heart" } onClick={ favActive } ></a>
        </div>
        {/*TODO organizar la información y meter el evento hover en la tarjeta*/}
        <fieldset className="information-box">
          <legend className="character-name">{props.name}</legend>
          <div className="information">
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

          </div>

        </fieldset>
      </div>
      <Link to={`/dashboard/character/${props.id}`} className="link-card"></Link>
    </article>
  )
}