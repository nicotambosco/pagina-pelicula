// App.jsx
import React, { useState } from 'react';
import '../styles/codigoVerificacion.css';
import '../styles/indexcodigoVerificacion.css';

function App() {
  const [code, setCode] = useState('');
  const [verified, setVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleVerification = () => {
    const validCode = '123456'; // Código de ejemplo (cámbialo por uno real)

    if (code === validCode) {
      setVerified(true);
      setVerificationMessage('Código verificado correctamente.');
    } else {
      setVerified(false);
      setVerificationMessage('Código incorrecto. Por favor, intenta de nuevo.');
    }
  };

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
      </div>
      <button onClick={handleVerification}>Verificar</button>
      <p className="message" style={{ color: verified ? 'green' : 'red' }}>
        {verificationMessage}
      </p>
    </div>
  );
}

export default App;
