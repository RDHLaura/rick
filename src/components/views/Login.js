import {useAuthContext} from "../../contexts/authContext";
import {useEffect, useRef, useState} from "react";
import InputForm from "../InputForm";
import {validateEmail, validatePassword} from "../../functions/validateForms";
import {Link} from "react-router-dom";
import {REGISTER} from "../../config/router/paths";

export function Login () {
  const {login} = useAuthContext();
  const formRef = useRef();
  const initialValuesErrors = {
    email: null,
    password: null,
    login: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);

//valida los inputs
  const onValidate = (values) =>{
    let errorsForm = {};
    errorsForm.email = validateEmail(values.email);
    errorsForm.password = validatePassword(values.password);
    //recupera los datos del usuario del localstorage y compruebo si coinciden con los inputs
    const dataUser = JSON.parse(localStorage.getItem('userData'));
    errorsForm.login = (dataUser === null) ? null : //evita error al intentar acceder a dataUSer.email
                        (dataUser.email === values.email && dataUser.password === values.password)  ?
                          null :
                          "No coincide usuario o contraseña registrado.";
    setErrors (errorsForm);
    return (Object.values(errorsForm).every(e => e ===null));
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData (formRef.current); //obtiene la información del formulario
    const values = Object.fromEntries(formData); // serializa los datos del formulario
    if(onValidate(values)){
      login();
    }
  }

  return (
      <main className="mainFrame">
        <h1>Login</h1>
        <p id="login" className="text-error">{errors.login}</p>
        <form onSubmit={handleSubmit} className="form form-sesion" ref={formRef} >
            <InputForm
              name= {"email"}
              type= {"email"}
              placeholder={"Email"}
              error={errors.email}
            />
            <InputForm
              name= {"password"}
              type= {"password"}
              placeholder={"Password"}
              error={errors.password}
            />
            {/* <input type="text" value={password} onChange={handleInputChange} /> */}
            <button type="submit">Iniciar sesión</button>
          </form>
        <Link className="link link-registro" to={REGISTER}>¿Aún no tienes cuenta?</Link>
      </main>
  );
}

