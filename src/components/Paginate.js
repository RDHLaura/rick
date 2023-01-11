import React from "react";

import { Link } from 'react-router-dom';

export function Paginate (props) {

  return(
    <div className="paginacion-container">
      {(props.page === 1) ? <button className="link-registro paginacion">Previus</button> : <button className="link-registro paginacion" onClick={props.previus} >Previus</button>}
      <p className=" paginacion">{props.page}/{props.pages}</p>
      {(props.page === props.pages) ? <button className="link-registro paginacion">Next</button> : <button className="link-registro paginacion" onClick={props.next} >Next</button>}
    </div>
  )
}