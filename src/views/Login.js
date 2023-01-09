import {useAuthContext} from "../contexts/authContext";
import {useRef, useState} from "react";
import InputForm from "../components/InputForm";
import {validateEmail, validatePassword} from "../functions/validateForms";
import {Link} from "react-router-dom";

export function Login () {
  const {login} = useAuthContext();
  //const [password, setPassword] = useState(''); //almacena el valor del input

  const formRef = useRef();
  const initialValuesErrors = {
    email: null,
    password: null,
    login: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);

  const onValidate = (values) =>{ //valida los inputs
    let errorsForm = {};
    errorsForm.email = validateEmail(values.email);
    errorsForm.password = validatePassword(values.password);
    return errorsForm;
  }
  const check_user = (data) => {
    if(Object.values(errors).every(e => e ===null)){
      const dataUser = JSON.parse(localStorage.getItem('userData')); //recupera los datos del usuario del localstorage
      return (dataUser === null) ? false : (dataUser.email === data.email && dataUser.password === data.password)  //devuelve si el usuarios se ha logueado correctamente o no
    }

  }


  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData (formRef.current); //obtiene la información del formulario
    const values = Object.fromEntries(formData); // serializa los datos del formulario
    setErrors(onValidate(values)); //comprueba si existen errores en los inputs y los almacena en el estado errors
    if(check_user(values)){ //sustituir clave por: localStorage.getItem('password')
      login();
    }else{
      setErrors({email: null,
        password: null,
        login: "No coincide usuario o contraseña registrado."})
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
        <Link className="link link-registro" to="/register">¿Aún no tienes cuenta?</Link>
      </main>
  );
}

