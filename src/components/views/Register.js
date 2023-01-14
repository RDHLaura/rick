
import {FormDataUser} from "../FormDataUser";

export function Register () {
  const dataUser = JSON.parse(localStorage.getItem("userData")) || {
    userName: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
    password_check: ""
  };
  console.log(dataUser)

  return (
    <main className="mainFrame">
      <h1 className="title">Registro</h1>
      <FormDataUser dataUser={dataUser}/>
    </main>
  )
}
