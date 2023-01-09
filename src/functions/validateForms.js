const validateEmail = (data) => {
  let error = emptyinput(data);
  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if(error === "" && !regexEmail.test(data)){
    error = "Email inválido";
  }
  return (error==="")? null : error;
}

const validatePassword = (data) => {
  let error = emptyinput(data);
  const regexPassword= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  if(error === "" && !regexPassword.test(data)){
    error = "Contraseña inválida (Debe tener un mínimo de 6 caracteres, al menos una mayuscula, una minuscula, un número y no debe contener espacios.)";
  }
  return (error==="")? null : error;
}

const validatePasswordCheck = (pw, pw_check)=>{
  let error = emptyinput(pw_check);
  if(error === "" && pw !== pw_check){
    error = "La contraseña no coincide.";
  }
  return (error==="")? null : error;
}

const validateUserName = (data)=>{
  let error= emptyinput(data);
  const regexUserName = /^[a-zA-z]{1}(\w|-+|_+){4,16}$/gm;
  if(error === "" && !regexUserName.test(data)){
    error = "Nombre de usuario no válido. Debe empezar por una letra y sólo puede contener números, letras y '-', '_'. (Ej: usuario_1, usuario-2) ";
  }
  return (error==="")? null : error
}

const validateBirthday = (data)=>{
  let error= emptyinput(data);
  const birthday = new Date (data);
  birthday.setFullYear(birthday.getFullYear()+16)
  let now = new Date();
  if(error === "" && birthday>=now){
    error = "Fecha inválida. Debe ser mayor de 16 años para poder registrarse."
  }
  return (error==="")? null : error
}
const validatePhone = (data)=>{

  let error = emptyinput(data);
  const regexPhone = /^[0-9]{9}$/
  if(error === "" && !regexPhone.test(data)){
    error = "El número de teléfono no es válido. Debe tener 9 cifras.";
  }
  return (error==="")? null : error;
}

const emptyinput = (data)=>{
  return (data === "") ? "Campo requerido": ""
}

export{
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validateUserName,
  validateBirthday,
  validatePhone
}