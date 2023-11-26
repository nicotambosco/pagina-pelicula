import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/inicio-session.css';
import '../styles/indexLogin.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación de email
    if (!isValidEmail(username)) {
      setEmailError('Por favor, ingresa un correo electrónico válido.');
      return;
    } else {
      setEmailError('');
    }

    // Validación de contraseña
    if (!isValidPassword(password)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      return;
    } else {
      setPasswordError('');
    }

    // Resto del código de login
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    if (username.trim() !== '' && password.trim() !== '') {
      const fakeToken = 'fakeToken123';
      localStorage.setItem('token', fakeToken);
      navigate('/pagina');
    } else {
      console.log('Por favor, ingresa un usuario y contraseña válidos.');
    }
  };

  return (
    <div className="login-body">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Email/usuario</label>
          <input
            id="username"
            type="text"
            placeholder="Ingresa Email/usuario"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setEmailError('');
            }}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="extra-options">
        <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        <span> | </span>
        <a href="/register">Registro</a>
      </div>
    </div>
  );
}

export default Login;
