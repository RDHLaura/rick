import {useAuthContext} from "../contexts/authContext";
import {useRef, useState} from "react";
import InputForm from "./InputForm";
import {
  validateBirthday,
  validateEmail,
  validatePassword, validatePasswordCheck,
  validatePhone,
  validateUserName
} from "../functions/validateForms";
import {useThemeContext} from "../contexts/themeContext";

export function FormDataUser (props) {
  const {login} = useAuthContext();
  const {lightTheme} =useThemeContext()

  const initialValuesErrors = {
    userName: null,
    birthday: null,
    email: null,
    phone: null,
    password: null,
    password_check: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);

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
    }
  }


  let [dataForm, setDataForm] = useState(
    {...props.dataUser}
  )
  const handleSubmit = (event) => {
    event.preventDefault(); //evita que los datos se envien por GET
     //valida los datos y muestra los errores
    onValidate(dataForm)
  }
  const handleChangeValue = (e)=>{
    setDataForm({
      ...dataForm,
    [e.target.name]: e.target.value
    });
    onValidate(dataForm)
  }

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
                placeholder={props.dataUser.userName }
                error={errors.userName}
                onBlur ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Fecha de nacimiento</legend>
              <InputForm
                name= {"birthday"}
                type= {"date"}
                placeholder={props.dataUser.birthday}
                error={errors.birthday}
                onBlur ={handleChangeValue}
                className={(lightTheme==="desactive")?`calendar calendar_d`:"calendar"}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Email</legend>
              <InputForm
                name= {"email"}
                type= {"email"}
                placeholder={props.dataUser.email}
                error={errors.email}
                onBlur ={handleChangeValue}
              />
            </fieldset>
          </section>

          <section className="column column-2">
            <fieldset className="fieldset">
              <legend>Número de teléfono</legend>
              <InputForm
                name= {"phone"}
                type= {"number"}
                placeholder={props.dataUser.phone}
                error={errors.phone}
                onBlur ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Password</legend>
              <InputForm
                name= {"password"}
                type= {"password"}
                placeholder={"Contraseña"}
                error={errors.password}
                onBlur ={handleChangeValue}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend>Repetir password</legend>
              <InputForm
                name= {"password_check"}
                type= {"password"}
                placeholder={"Repetir contraseña"}
                error={errors.password_check}
                onBlur ={handleChangeValue}
              />
            </fieldset>
          </section>
        </div>
        <button type='submit' className="form-button" >Guardar</button>
      </form>

  )
}