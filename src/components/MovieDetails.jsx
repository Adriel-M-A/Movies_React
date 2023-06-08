import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import Loading from "./Loading";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${id}`).then((data) => {
      setMovie(data);
    });
  }, [id]);

  if (!movie) {
    return <Loading />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center">
        <img className="max-w-xs" src={imageUrl} alt={movie.title} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">{movie.title}</h2>
        <p className="text-center">{movie.overview}</p>
        <ul className="flex flex-wrap">
          {movie.genres.map((genre) => (
            <li key={genre.id} className="mr-2">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
