import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/inicio-session.css';
import '../styles/indexLogin.css';
import '../componentes/Token.jsx'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    if (username.trim() !== '' && password.trim() !== '') {
      const fakeToken = 'fakeToken123';
      localStorage.setItem('Token', fakeToken);
      navigate('/Pelicula'); 
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
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
