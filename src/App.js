import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LOGIN, REGISTER, PROFILE, HOME,LOGOUT} from "./config/router/paths";
import {Login} from "./views/Login";
import {Profile} from "./views/Profile";
import {Logout} from "./views/Logout";
import {Home} from "./views/Home";
import {AuthContextProvider} from "./contexts/authContext";
import {PublicRoute} from "./components/router/PublicRoute";
import {PrivateRoute} from "./components/router/PrivateRoute";
import {Register} from "./views/Register";

function App() {
  return (
      /*Rodeamos a toda la aplicacion con nuestro componente AuthContextProvider para que puedan acceder a la lógica qye contiene
      * Y anidamos las rutas públicas por un lado y las privadas por otro*/
      <AuthContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PublicRoute />}>
                      <Route index element={<Home />} />
                      <Route path={LOGIN} element={<Login />} />
                      <Route path={REGISTER} element={<Register />} />
                  </Route>
                  <Route path={PROFILE} element={<PrivateRoute />}>
                      <Route index element={<Profile />} />
                      <Route path={LOGOUT} element={<Logout />} />
                  </Route>

              </Routes>
          </BrowserRouter>
      </AuthContextProvider>

  );
}

export default App;
