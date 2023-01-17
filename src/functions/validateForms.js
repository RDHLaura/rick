/**
 * @module ValidatesForm
 */

/**
 * @memberOf module:ValidatesForm
 * @name validateEmail
 * @function
 * @description Función que valida si el correo introducido es correcto
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validateEmail = (data) => {

  let error = emptyinput(data);
  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;

  if(error === "" && !regexEmail.test(data)){
    error = "Email inválido";
  }

  return (error==="")? null : error;
}

/**
 * @memberOf module:ValidatesForm
 * @name validatePassword
 * @function
 * @description Función que valida si el password introducido es correcto
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validatePassword = (data) => {

  let error = emptyinput(data);
  const regexPassword= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

  if(error === "" && !regexPassword.test(data)){
    error = "Contraseña inválida (Debe tener un mínimo de 6 caracteres, al menos una mayuscula, una minuscula, un número y no debe contener espacios.)";
  }

  return (error==="")? null : error;
}

/**
 * @memberOf module:ValidatesForm
 * @name validatePasswordCheck
 * @function
 * @description Función que valida si el password introducido es correcto y si coincide con el password introducido previamente
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validatePasswordCheck = (pw, pw_check)=>{

  let error = emptyinput(pw_check);

  if(error === "" && pw !== pw_check){
    error = "La contraseña no coincide.";
  }

  return (error==="")? null : error;
}

/**
 * @memberOf module:ValidatesForm
 * @name validateUserName
 * @function
 * @description Función que valida si el userName introducido es correcto
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validateUserName = (data)=>{

  let error= emptyinput(data);
  const regexUserName = /^[a-zA-z]{1}(\w|-+|_+){4,16}$/gm;

  if(error === "" && !regexUserName.test(data)){
    error = "Nombre de usuario no válido. Debe tener entre 4 y 16 caracteres  empezar por una letra y sólo puede contener números, letras y '-', '_'. (Ej: usuario_1, usuario-2) ";
  }

  return (error==="")? null : error
}

/**
 * @memberOf module:ValidatesForm
 * @name validateBirthday
 * @function
 * @description Función que valida si la fecha de nacimiento es válida y si el usuario es mayor de 16 años
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validateBirthday = (data)=>{
  console.log(data)

  let error= emptyinput(data);
  if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(data))
    return "Formato de fecha inválido"

  //Validación de cada parte de la fecha
  const partsDate = data.split('-').map((element) => parseInt(element, 10));
  partsDate[0] -= 1;
  const birthday = new Date(partsDate[0], partsDate[1], partsDate[2]);
  if (birthday.getFullYear() !== partsDate[0] || birthday.getMonth() !== partsDate[1] || birthday.getDate() !== partsDate[2]) {
    return "Formato de fecha inválido";
  }

  //comprueba si es mayor de 16 años
  //const birthday = new Date (data);
  birthday.setFullYear(birthday.getFullYear()+16);
  let now = new Date();

  if(error === "" && birthday>=now){
    error = "Fecha inválida. Debe ser mayor de 16 años para poder registrarse."
  }

  return (error==="")? null : error
}

/**
 * @memberOf module:ValidatesForm
 * @name validatePhone
 * @function
 * @description Función que valida si el télefono introducido es correcto
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validatePhone = (data)=>{

  let error = emptyinput(data);
  const regexPhone = /^[0-9]{9}$/

  if(error === "" && !regexPhone.test(data)){
    error = "El número de teléfono no es válido. Debe tener 9 cifras.";
  }

  return (error==="")? null : error;
}

/**
 * @memberOf module:ValidatesForm
 * @name validateText
 * @function
 * @description Función que valida si el texto es válido
 * @param data input del usuario
 * @returns {null|string} null si el input es válido o el mensaje de error
 */
const validateText = (data)=>{

  let error = emptyinput(data);
  const regexText = /([A-Za-z0-9]|\.|,|\?|¿|!|¡|\s){4,150}$/gm;

  if(error === "" && !regexText.test(data)){
    error = "El texto debe tener entre 4 y 150 caracteres y sólo están permitidos los números, letras, y los siguientes símbolos [.,¿?¡!].";
  }

  return (error==="")? null : error;
}
/**
 * @memberOf module:ValidatesForm
 * @name emptyinput
 * @function
 * @description Comprueba si el usuario no ha escrito nada
 * @param data input del usuario
 * @returns {string} mensaje de error
 */
const emptyinput = (data)=>{
  return (data === "") ? "Campo requerido": ""
}

export{
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validateUserName,
  validateBirthday,
  validatePhone,
  validateText
}