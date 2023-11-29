import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/codigoVerificacion.css';
import '../styles/indexcodigoVerificacion.css';

function generateRandomCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 4;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function App() {
  const [code, setCode] = useState('');
  const [verified, setVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [validCode, setValidCode] = useState('');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendCode = () => {
    const generatedCode = generateRandomCode();
    setValidCode(generatedCode);
    console.log(`Código generado: ${generatedCode}`);
    console.log(`Código enviado por correo a: ${email}`);
    setCodeSent(true);
  };

  const handleVerification = async () => {
    if (code === validCode) {
      setVerified(true);
      setVerificationMessage('Código verificado correctamente. ¡Bienvenido!');
    } else {
      setVerified(false);
      setVerificationMessage('Código incorrecto. Por favor, intenta de nuevo.');
    }
  };

  const conectarAPI = async (email, generatedCode) => {
    const apiUrl = 'URL_DE_TU_API_AQUI'; // Reemplaza con la URL de tu API
    const requestBody = { email, generatedCode };

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

  if (verified) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="container">
      <h1>Verificación de Código</h1>
      {!codeSent ? (
        <div className="input-container">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSendCode}>Enviar Código</button>
        </div>
      ) : (
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingresa el código"
            value={code}
            onChange={handleInputChange}
          />
          <button onClick={handleVerification}>Verificar</button>
        </div>
      )}
      <p className="message" style={{ color: verified ? 'green' : 'red' }}>
        {verificationMessage}
      </p>
    </div>
  );
}

export default App;
