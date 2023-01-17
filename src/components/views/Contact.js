import React, {useRef, useState} from "react";
import InputForm from "../InputForm";
import {validateEmail, validateText} from "../../functions/validateForms";
import {Title} from "../Title";



/**
 * @memberOf module:Views
 * @name Contact
 * @component
 * @description Página de contacto que contiene un formulario
 * @returns {JSX.Element}
 */
export function Contact () {
  const formRef = useRef();
  const initialValuesErrors = {
    email: null,
    message: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);
  const [messageSent, setMessageSent] = useState("");

//valida los inputs

  const onValidate = (values) =>{
    let errorsForm = {};
    errorsForm.email = validateEmail(values.email);
    errorsForm.message = validateText(values.message);
    setErrors (errorsForm);
    return (Object.values(errorsForm).every(e => e ===null));
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData (formRef.current); //obtiene la información del formulario
    const values = Object.fromEntries(formData); // serializa los datos del formulario
    if(onValidate(values)){
      setMessageSent("Su mensaje ha sido enviado correctamente.")
      formRef.current.reset();
    }
  }
  return (
    <main className="mainFrame">
      <Title contentTitle="Contacto" />
      <p id="login" className="text-error">{errors.login}</p>
      <p className="text-error">{messageSent}</p>
      <form onSubmit={handleSubmit} className="form form-sesion" ref={formRef} >
        <InputForm
          name= {"email"}
          type= {"email"}
          placeholder={"Email"}
          error={errors.email}
        />
        <div className="container-error" >
          <textarea
            name="message"
            type="text"
            className= "form-input"
            placeholder="Escriba aquí su mensaje"
            rows="4"
          />
          {errors.message && <p className="text-error">{errors.message}</p>}
        </div>

        <button className="form-button" type="submit">Enviar</button>
      </form>

    </main>
  );
}