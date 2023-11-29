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
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de inicio */}
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Resto de las rutas */}
        <Route path="/Login" element={<Login />} />
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
