import React from 'react'
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

            />
            {props.error && <p className="text-error">{props.error}</p>}
        </div>
    )
}
