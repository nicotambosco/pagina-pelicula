import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/password.css';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value; // Obtiene el valor del campo de correo electrónico

    try {
      const response = await conectarAPI(email);

      if (response.ok) {
        navigate('/Verificacion');
      } else {
        // Manejo de errores si la solicitud no es exitosa
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      // Manejo de otros errores
    }
  };

  const conectarAPI = async (email) => {
    const apiUrl = 'URL_DE_TU_API_AQUI'; // Reemplaza con la URL de tu API
    const requestBody = { email };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      return response;
    } catch (error) {
      throw new Error('Error al conectar con la API');
    }
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
