import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login";
import Pelicula from "./pages/Pelicula";
import Verificacion from "./pages/Verificacion";
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Token from './componentes/Token';

// Función para verificar si hay un token 
const tieneToken = () => {
  // Lógica para verificar si existe un token (puede ser almacenado en localStorage, sessionStorage o en el estado global de la aplicación)
  const token = localStorage.getItem('token'); 

  return token !== null; // Devuelve true si existe un token, de lo contrario false
};

export default function SinToken() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de inicio */}
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Ruta del componente Login */}
        <Route
          path="/Login"
          element={tieneToken() ? <Navigate to="/Pelicula" /> : <Login />}
        />

        {/* Resto de las rutas */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Pelicula" element={<Token><Pelicula /></Token>} />
        <Route path="/Verificacion/*" element={<Verificacion />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
      </Routes>
    </Router>
  );
}
