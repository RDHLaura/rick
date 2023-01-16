import {useAuthContext} from "../../contexts/authContext";
import {useRef, useState} from "react";
import InputForm from "../InputForm";
import {validateEmail, validatePassword} from "../../functions/validateForms";
import {Link} from "react-router-dom";
import {REGISTER} from "../../config/router/paths";

/**
 * Renderiza la página de login,(formulario no controlado), comprueba los datos introducidos por el usuario y
 * crea una sesión si coinciden con el usuario registrado en el localstorage
 *
 * @returns {JSX.Element} Página de login
 */
export function Login () {
  const {login} = useAuthContext();
  const formRef = useRef();
  //incia los errores en null
  const initialValuesErrors = {
    email: null,
    password: null,
    login: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);


  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData (formRef.current); //obtiene la información del formulario
    const values = Object.fromEntries(formData); // serializa los datos del formulario
    if(onValidate(values)){ //si son validos loguea al usuario
      login();
    }
  }

//valida los inputs
  const onValidate = (values) =>{
    let errorsForm = {};
    errorsForm.email = validateEmail(values.email);
    errorsForm.password = validatePassword(values.password);
    //recupera los datos del usuario del localstorage y compruebo si coinciden con los inputs
    const dataUser = JSON.parse(localStorage.getItem('userData'));
    console.log(dataUser === null)
    errorsForm.login = (dataUser === null) ? "No coincide usuario o contraseña registrado." : //si no hya ningún usuario registrado
                        (dataUser.email === values.email && dataUser.password === values.password)  ?
                          null :
                          "No coincide usuario o contraseña registrado." ;
    setErrors (errorsForm);
    return (Object.values(errorsForm).every(e => e ===null)); //devuelve true si no errores
  }



  return (
      <main className="mainFrame">
        <h1 className="title">Login</h1>
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
            <button className="form-button" type="submit">Iniciar sesión</button>
          </form>
        <Link className="link link-registro" to={REGISTER}>¿Aún no tienes cuenta?</Link>
      </main>
  );
}

