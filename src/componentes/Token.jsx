import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Token = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    console.log("Estoy en todos lados");
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      // Si hay un token, navegar a la página de Dashboard
      history.push('/dashboard');
    } else {
      // Si no hay token, navegar a la página de Login
      history.push('/login');
    }
  }, [history]);

  return <>{children}</>;
};

export default Token;
