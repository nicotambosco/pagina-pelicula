import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import '../styles/password.css';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... lógica de enviar correo electrónico eliminada
    navigate('/Verificacion'); // Utiliza navigation.navigate en lugar de history.push
  };

  return (
    <div className="element">
      <h2>Recuperar contraseña</h2>
      <div className="element-main">
        <h1>Ingrese sus Datos</h1>
        <p>¿Olvidaste tu contraseña? No te preocupes, estamos aquí para ayudarte a recuperar el acceso a tu cuenta. Ingresa tu dirección de correo electrónico y te enviaremos las instrucciones necesarias para restablecer tu contraseña de forma segura y sencilla.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingresa tu e-mail" />
          <input type="submit" value="Recuperar mi contraseña" />
        </form>
      </div>
      <div className="copy-right">
        <p>© 2023 </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
