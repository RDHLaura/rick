import React from 'react'

/**
 * @memberOf module:Components
 * @name InputForm
 * @component
 * @description Renderiza un componente input que contiene un div con el input y el mensaje de error en caso de que el dato introducido por el usuario sea inválido.
 * @param props datos que queremos mostrar en el input
 * @returns {JSX.Element} elemento con el input y el error asociado a él
 */
export default function InputForm(props) {

    return (
        <div className="container-error" >
            <input
                name={props.name}
                type={props.type}
                className= {(props.className!== undefined )?`form-input ${props.className}` : "form-input"}
                placeholder={props.placeholder}
                defaultValue={props.value}
                onBlur={props.onBlur}
                onChange={props.onChange}
            />
            {props.error && <p className="text-error">{props.error}</p>}
        </div>
    )
}
