import {useAuthContext} from "../../contexts/authContext";
import {useState} from "react";

export function Login () {
  const {login} = useAuthContext();
  const [password, setPassword] = useState(''); //almacena el valor del input

  function handleInputChange(event){
    setPassword(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(password === "clave"){ //sustituir clave por: localStorage.getItem('password')
      login();
    }
  }
  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={password} onChange={handleInputChange} />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
}

