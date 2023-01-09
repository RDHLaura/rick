import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LOGIN, PROFILE, HOME,LOGOUT} from "./config/router/paths";
import {Login} from "./components/views/Login";
import {Profile} from "./components/views/Profile";
import {Logout} from "./components/views/Logout";
import {Home} from "./components/views/Home";
import {AuthContextProvider} from "./contexts/authContext";
import {PublicRoute} from "./components/router/PublicRoute";
import {PrivateRoute} from "./components/router/PrivateRoute";

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
