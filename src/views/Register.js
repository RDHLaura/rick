import {useAuthContext} from "../contexts/authContext";
import {useEffect, useRef, useState} from "react";
import InputForm from "../components/InputForm";
import {
  validateBirthday,
  validateEmail,
  validatePassword, validatePasswordCheck,
  validatePhone,
  validateUserName
} from "../functions/validateForms";

export function Register () {
  const {login} = useAuthContext();
  const formRef = useRef();
  const initialValuesErrors = {
    userName: null,
    birthday: null,
    email: null,
    phone: null,
    password: null,
    password_check: null
  }
  const [errors, setErrors] = useState(initialValuesErrors);
  useEffect(()=>{
    console.log(errors);
  },[errors])
  const onValidate = (values) => {
    console.log("entra onvalidate");
    let errorsForm = {};
    errorsForm.userName = validateUserName(values.userName);
    errorsForm.birthday = validateBirthday(values.birthday);
    errorsForm.email = validateEmail(values.email);
    errorsForm.phone = validatePhone(values.phone);
    errorsForm.password = validatePassword(values.password);
    errorsForm.password_check = validatePasswordCheck(values.password, values.password_check);
    setErrors(errorsForm);
    //comprueba que no haya errores y almacena el nuevo usuario en localstorage
    if(Object.values(errorsForm).every(element => element===null)){
      storedata(values);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //evita que los datos se envien por GET
    const formData = new FormData(formRef.current); //obtiene la información mediante FormData
    const values = Object.fromEntries(formData); //serializa los datos
    //valida los datos y muestra los errores
    onValidate(values)
  }
  const storedata = (data) => {
    localStorage.userData = JSON.stringify(data);
    login();
  }

  return (
    <main className="mainFrame">
      <h1 className="title">Registro</h1>
      <form className="form form-sesion" onSubmit={handleSubmit} ref={formRef}>
        <InputForm
          name= {"userName"}
          type= {"text"}
          placeholder={"Nombre de usuario"}
          error={errors.userName}
        />
        <InputForm
          name= {"birthday"}
          type= {"date"}
          placeholder={"Fecha de nacimiento"}
          error={errors.birthday}
        />
        <InputForm
          name= {"email"}
          type= {"email"}
          placeholder={"Email"}
          error={errors.email}
        />
        <InputForm
          name= {"phone"}
          type= {"number"}
          placeholder={"Número de teléfono"}
          error={errors.phone}
        />
        <InputForm
          name= {"password"}
          type= {"password"}
          placeholder={"Contraseña"}
          error={errors.password}
        />
        <InputForm
          name= {"password_check"}
          type= {"password"}
          placeholder={"Repetir contraseña"}
          error={errors.password_check}
        />

        <button type='submit' className="form-button" >Entrar</button>
      </form>
    </main>
  )
}
