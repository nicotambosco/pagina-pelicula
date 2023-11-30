import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Token = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      // Si hay un token, navegar a la página de Pelicula
      navigate('/Pelicula');
    } else {
      // Si no hay token, navegar a la página de Login
      navigate('/login');
    }
  }, [history]);

  return <>{children}</>;
};

export default Token;
