import {useRef, useState} from "react";

/**
 * Rendeciza la barra de búsqueda
 * @param props recibe los parámetros de la búsqueda y las funciones modificadoras que se pasarán en los manejadores de eventos
 *
 * @returns {JSX.Element} barra de búqueda
 */
const SearchBar = function(props){

  return (
    <div className='searchFrame'>
      <form className="searchFrame" >
        <div className="search_div">
          <select className="select-items" name="optionFilter" value={props.busqueda.optionFilter} onChange={props.handleSearch}>
            <option value="name">Name</option>
            <option value="species">Species</option>
            <option value="type">Type</option>
          </select>
          <input
            className='search_input'
            name={props.busqueda.optionFilter}
            placeholder="Búsqueda... "
            onChange={props.handleSearch}
          />
        </div>
        <div className="container_selects">
          <p>Status:
            <select className="select-items" name="optionStatus" value={props.busqueda.optionStatus} onChange={props.handleSearch}>
              <option value=""> </option>
              <option value="alive"> Alive</option>
              <option value="dead"> Dead</option>
              <option value="unknow"> Unknow</option>
            </select>
          </p>
          <p>Gender:
            <select className="select-items" name="optionGender" value={props.busqueda.optionGender} onChange={props.handleSearch}>
              <option value=""> </option>
              <option value="female"> Female</option>
              <option value="male"> Male</option>
              <option value="genderless"> Genderless</option>
              <option value="unknow"> Unknow</option>
            </select>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SearchBar