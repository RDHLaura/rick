
import {FormDataUser} from "../FormDataUser";
import {Title} from "../Title";

/**
 * @memberOf module:Views
 * @name Register
 * @component
 * @description Página de registro de usuario que contiene el formulario de registro
 * @returns {JSX.Element} Página de registro
 */
export function Register () {

  return (
    <main className="mainFrame">
      <Title contentTitle="Registro"/>
      <FormDataUser />
    </main>
  )
}
