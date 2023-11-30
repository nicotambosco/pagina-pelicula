import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/codigoVerificacion.css';
import '../styles/indexcodigoVerificacion.css';

function App() {
  const [code, setCode] = useState('');
  const [verified, setVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const conectarAPI = async (code) => {
    const apiUrl = 'https://moviesapi-production-ad6c.up.railway.app/user/recover_password'; // Reemplaza con la URL de tu API

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const data = await response.json();
        return data; // Aquí puedes manejar la respuesta de la API si es necesaria
      } else {
        throw new Error('Error al verificar el código');
      }
    } catch (error) {
      throw new Error('Error al conectar con la API');
    }
  };

  const handleVerification = async () => {
    try {
      const data = await conectarAPI(code);
      if (data && data.valid) {
        setVerified(true);
        setVerificationMessage('Código verificado correctamente. ¡Bienvenido!');
      } else {
        setVerified(false);
        setVerificationMessage('Código incorrecto. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setVerified(false);
      setVerificationMessage('Hubo un error al verificar el código. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  if (verified) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="container">
      <h1>Verificación de Código</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Ingresa el código"
          value={code}
          onChange={handleInputChange}
        />
        <button onClick={handleVerification}>Verificar</button>
      </div>
      <p className="message" style={{ color: verified ? 'green' : 'red' }}>
        {verificationMessage}
      </p>
    </div>
  );
}

export default App;
