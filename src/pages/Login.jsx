import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/inicio-session.css';
import '../styles/indexLogin.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    if (username.trim() !== '' && password.trim() !== '') {
      try {
        const response = await conectarAPI(username, password);
        const data = await response.json();

        if (response.ok) {
          const token = data.token; // Suponiendo que la API devuelve un token
          localStorage.setItem('token', token);
          navigate('/Pelicula'); 
        } else {
          console.log('Error al autenticar:', data.error);
        }
      } catch (error) {
        console.error('Error al conectarse con la API:', error);
      }
    } else {
      console.log('Por favor, ingresa un usuario y contraseña válidos.');
    }
  };

  const conectarAPI = async (username, password) => {
    const apiUrl = 'URL_DE_TU_API_AQUI'; // Reemplaza con la URL de tu API
    const requestBody = {
      username: username,
      password: password
    };

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
