import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative m-2">
        <img
          className="w-60 h-80 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 object-cover"
          src={imageUrl}
          alt={movie.title}
        />
      </div>
    </Link>
  );
}
