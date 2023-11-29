import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import '../styles/indexRegister.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, phone, gender } = formData;

    try {
      const response = await conectarAPI(formData);
      const data = await response.json();

      if (response.ok) {
        document.getElementById('success-message').style.display = 'block';
        navigate('/login');
      } else {
        document.getElementById('error-message').style.display = 'block';
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      // Manejo de errores
    }
  };

  const conectarAPI = async (formData) => {
    const apiUrl = 'https://moviesapi-production-ad6c.up.railway.app/user/register'; // Reemplaza con la URL de tu API

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      return response;
    } catch (error) {
      throw new Error('Error al conectar con la API');
    }
  };

  return (
    <div className="main">
      <div className="main-w3l">
        <h1 className="logo-w3">Ingrese sus datos</h1>
        <div className="w3layouts-main">
          <h2>
            <span>¡Regístrese ahora mismo!</span>
          </h2>
          <form id="register-form" onSubmit={handleSubmit}>
            <input
              placeholder="Nombre completo"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Número de contacto"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Confirmar Contraseña"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="select-style">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar sexo</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <input type="submit" value="Registrarme" name="register" />
          </form>
          <div
            id="success-message"
            style={{ display: 'none', color: 'green', fontWeight: 'bold' }}
          >
            ¡Registro exitoso! Puede iniciar sesión ahora.
          </div>
          <div
            id="error-message"
            style={{ display: 'none', color: 'red', fontWeight: 'bold' }}
          >
            ¡Usuario existente! Por favor, ingrese otra información.
          </div>
        </div>
        <div className="footer-w3l">
          <p>&copy; 2023 CineFlix</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
