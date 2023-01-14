import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LOGIN, REGISTER, PROFILE, HOME, LOGOUT, DASHBOARD, FAVORITES, CHARACTER} from "./config/router/paths";
import {Login} from "./components/views/Login";
import {Profile} from "./components/views/Profile";
import {Logout} from "./components/views/Logout";
import {Home} from "./components/views/Home";
import {AuthContextProvider} from "./contexts/authContext";
import {PublicRoute} from "./components/router/PublicRoute";
import {PrivateRoute} from "./components/router/PrivateRoute";
import {Register} from "./components/views/Register";
import {Footer} from "./components/Footer";
import React from "react";
import {Dashboard} from "./components/views/Dashboard";
import {Navbar} from "./components/Navbar";
import {ThemeContextProvider} from "./contexts/themeContext";
import Favorites from "./components/views/Favorites";
import {CharacterDetail} from "./components/views/CharacterDetail";

function App() {

  return (
    /*Rodeamos a toda la aplicacion con nuestro componente AuthContextProvider para que puedan acceder a la lógica qye contiene
      * Y anidamos las rutas públicas por un lado y las privadas por otro*/
    <>
      <ThemeContextProvider>
      <AuthContextProvider>

            <Navbar />
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={REGISTER} element={<Register />} />
              </Route>
              <Route path={DASHBOARD} element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
                <Route path={PROFILE} element={<Profile />} />
                <Route path={FAVORITES} element={<Favorites />} />
                <Route path={CHARACTER} element={<CharacterDetail />} />
                <Route path={LOGOUT} element={<Logout />} />
              </Route>
            </Routes>
            <Footer />

      </AuthContextProvider>
      </ThemeContextProvider>

    </>
  );
}

export default App;
