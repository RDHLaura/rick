import {useAuthContext} from "../contexts/authContext";
import {useState} from "react";
import InputForm from "./InputForm";
import {
  validateBirthday,
  validateEmail,
  validatePassword, validatePasswordCheck,
  validatePhone,
  validateUserName
} from "../functions/validateForms";
import {useThemeContext} from "../contexts/themeContext";

/**
 * @memberOf module:Components
 * @name FormDataUser
 * @description Renderiza el formulario de registro o de actualización de datos del usuario. Comprueba que el usuario esté logueado, si lo está muestra los datos de este del localstorage (formulario de actualización de datos). Al enviar los datos, comprueba que estos sean correctos, en caso de error lo muestra en el dom, si es correcto registra al usuario y almacena sus datos en el localstorage
 * @returns {JSX.Element} formulario
 */
export function FormDataUser () {
  /*Variables iniciales y estados*/
  const {login, isAuthenticated} = useAuthContext();
  const {lightTheme} =useThemeContext()

  //inicializo los errores en null
  const initialValuesErrors = {
    userName: null,
    birthday: null,
    email: null,
    phone: null,
    password: null,
    password_check: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);

  /*Inicio con los datos almacenados en localstorage, que en caso de que no haya serán los valores inicializados con cadena vacía*/
  const dataUser = JSON.parse(localStorage.getItem("userData")) || {
    userName: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
    password_check: ""
  };

  let [dataForm, setDataForm] = useState({...dataUser})
  /**
   * @description Función que elimina un personaje de la lista de favoritos
   * @name deleteFav
   * @function
   * @param id id del personaje
   */
  const handleChangeValue = (e)=>{ //cuando el usuario haga un cambio, este se almacena en dataForm
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (event) => { //se valida los datos
    event.preventDefault();
    onValidate(dataForm)

  }
  const onValidate = (values) => {
    let errorsForm = {};
    errorsForm.userName = validateUserName(values.userName );
    errorsForm.birthday = validateBirthday(values.birthday );
    errorsForm.email = validateEmail(values.email );
    errorsForm.phone = validatePhone(values.phone );
    errorsForm.password = validatePassword(values.password);
    errorsForm.password_check = validatePasswordCheck(values.password, values.password_check);
    setErrors(errorsForm);
    //comprueba que no haya errores y almacena el nuevo usuario en localstorage
    if(Object.values(errorsForm).every(element => element === null)){
      storedata(values);
      props.setDataUser(dataForm)
    }
  }

  //almacena los datos y loguea al usuario
  const storedata = (data) => {
    localStorage.userData = JSON.stringify(data);
    login();
  }

  return (
      <form className="form form-perfil-update" onSubmit={handleSubmit} >
        <div className="columns">
          <section className="column column-1">
            <fieldset className="fieldset">
              <legend>Nombre de usuario</legend>
              <InputForm
                name= {"userName"}
                type= {"text"}
                placeholder={(isAuthenticated) && dataUser.userName }
                error={errors.userName}
                onChange ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Fecha de nacimiento: </legend>
              <InputForm
                name= {"birthday"}
                type= {"date"}
                placeholder={(isAuthenticated) && dataUser.birthday}
                error={errors.birthday}
                onChange ={handleChangeValue}
                className={(lightTheme==="desactive")?`calendar calendar_d`:"calendar"}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Email</legend>
              <InputForm
                name= {"email"}
                type= {"email"}
                placeholder={(isAuthenticated) && dataUser.email}
                error={errors.email}
                onChange ={handleChangeValue}
              />
            </fieldset>
          </section>

          <section className="column column-2">
            <fieldset className="fieldset">
              <legend>Número de teléfono</legend>
              <InputForm
                name= {"phone"}
                type= {"number"}
                placeholder={(isAuthenticated) && dataUser.phone}
                error={errors.phone}
                onChange ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Password</legend>
              <InputForm
                name= {"password"}
                type= {"password"}
                error={errors.password}
                onChange ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Repetir password</legend>
              <InputForm
                name= {"password_check"}
                type= {"password"}
                error={errors.password_check}
                onChange ={handleChangeValue}
              />
            </fieldset>
          </section>
        </div>
        <button type='submit' className="form-button" >Guardar</button>
      </form>

  )
}