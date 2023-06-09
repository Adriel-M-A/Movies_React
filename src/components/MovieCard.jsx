import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "URL_BASE_IMAGEN" + movie.poster_path; // Reemplaza "URL_BASE_IMAGEN" por la URL base de las imágenes de la nueva API

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative m-2">
        <img
          className="w-60 h-80 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 object-cover"
          src={imageUrl}
          alt={movie.title} // Asegúrate de utilizar la propiedad correcta para el título de la película
        />
      </div>
    </Link>
  );
}
