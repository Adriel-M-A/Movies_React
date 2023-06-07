import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";

export function MoviesGrid(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const tipo = props.tipo;
    get(`/movie/${tipo}`).then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <div>
      <h2 className="">Peliculas Populares</h2>
      <ul className="">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
