import React from 'react'
export default function InputForm(props) {
    return (
        <div className="container-error" >
            <input
                name={props.name}
                type={props.type}
                className="form-input"
                placeholder={props.placeholder}
            />
            {props.error && <p className="text-error">{props.error}</p>}
        </div>
    )
}
