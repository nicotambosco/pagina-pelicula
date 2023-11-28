import React from 'react';
import '../styles/Register.css'; // Importa el archivo CSS específico para Register
import '../styles/indexRegister.css'; 

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector("input[name='Email']").value;
    const password = document.querySelector("input[name='Password']").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      document.getElementById("error-message").style.display = "block";
    } else {
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("success-message").style.display = "block";
    }
  };

  return (
    <div className="main">
      <div className="main-w3l">
        <h1 className="logo-w3">Ingrese sus datos</h1>
        <div className="w3layouts-main">
          <h2><span>¡Regístrese ahora mismo!</span></h2>
          <form id="register-form" onSubmit={handleSubmit}>
            <input placeholder="Nombre completo" name="Name" type="text" required />
            <input placeholder="Email" name="Email" type="email" required />
            <input placeholder="Número de contacto" name="phone" type="text" required />
            <input placeholder="Contraseña" name="Password" type="password" id="password1" required />
            <input placeholder="Confirmar Contraseña" name="ConfirmPassword" type="password" id="password2" required />
            <input type="submit" value="Registrarme" name="register" />
          </form>
          <div id="success-message" style={{ display: 'none', color: 'green', fontWeight: 'bold' }}>
            ¡Registro exitoso! Puede iniciar sesión ahora.
          </div>
          <div id="error-message" style={{ display: 'none', color: 'red', fontWeight: 'bold' }}>
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
