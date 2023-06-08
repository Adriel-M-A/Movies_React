import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MoviesCarousel(props) {
  const [movies, setMovies] = useState([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const moviesPerGroup = 6;

  useEffect(() => {
    const tipo = props.tipo;
    get(`/movie/${tipo}`).then((data) => {
      setMovies(data.results);
    });
  }, []);

  const handlePrev = () => {
    setCurrentGroupIndex((prev) =>
      prev === 0 ? Math.ceil(movies.length / moviesPerGroup) - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentGroupIndex((prev) =>
      prev === Math.ceil(movies.length / moviesPerGroup) - 1 ? 0 : prev + 1
    );
  };

  const currentGroup = movies.slice(
    currentGroupIndex * moviesPerGroup,
    currentGroupIndex * moviesPerGroup + moviesPerGroup
  );

  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-gray-700 font-semibold tracking-wide">
          {props.subtitulo}
        </h3>

        <Link
          className="text-gray-500 hover:bg-gray-200 rounded px-2 py-1 transition-colors duration-200"
          to={props.url}
        >
          Mostrar Todo
        </Link>
      </div>

      <div className="relative">
        <button
          className="absolute top-0 left-0 h-full w-12 flex items-center justify-center hover:bg-gray-200 hover:bg-opacity-50 z-10"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-0 right-0 h-full w-12 flex items-center justify-center hover:bg-gray-200 hover:bg-opacity-50 z-10"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div className="flex">
            {currentGroup.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
