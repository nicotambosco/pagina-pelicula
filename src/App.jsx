import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
  
  import Login from "./pages/Login";
  import Pelicula from "./pages/pelicula";
  import Verificacion  from "./pages/Verificacion";
  import ForgotPassword from './pages/ForgotPassword';
  import Register from './pages/Register';
  export default function App() {
    return (
      <Router>
        
  
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Pelicula" element={<Pelicula />} />
          <Route path="/Verificacion/*" element={<Verificacion />}>
            <Route path="welcome" element={<p>Welcome!</p>} />
          </Route>
          
        </Routes>
      </Router>
    );
  }