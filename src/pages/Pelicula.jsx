import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pelicula.css";
import "../styles/indexPelicula.css";

function Pelicula() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState([]); // Estado para almacenar los datos de películas
  const navigate = useNavigate();

  const obtenerDatosPeliculas = async () => {
    const apiUrl = "https://moviesapi-production-ad6c.up.railway.app/movies";
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
            // Puedes añadir otros headers si son necesarios, como tokens de autorización, etc.
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (Array.isArray(data)) setMovieData(data);
      } else {
        throw new Error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error.message);
    }
  };

  useEffect(() => {
    obtenerDatosPeliculas(); // Llama a la función para obtener los datos al cargar el componente
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CineFlix</h1>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>
      <main className="main-content">
        <section className="movie-list">
          <div className="movies-container">
            {movieData?.map((movie) => (
              <div
                key={movie.id}
                className={`movie ${selectedMovie === movie ? "selected" : ""}`}
                onClick={() => handleMovieClick(movie)}
              >
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>Año: {movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {selectedMovie && (
          <section className="movie-details-section">
            <h2>Detalles</h2>
            <div className="selected-movie">
              <img src={selectedMovie.poster} alt={selectedMovie.title} />
              <div className="selected-movie-details">
                <h3>{selectedMovie.title}</h3>
                <p>Año: {selectedMovie.year}</p>
                <p>Director: {selectedMovie.director}</p>
                <p>Género: {selectedMovie.genre.join(", ")}</p>
                <p>Duración: {selectedMovie.duration} minutos</p>
                <p>Calificación: {selectedMovie.rate}</p>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CineFlix</p>
      </footer>
    </div>
  );
}

export default Pelicula;
