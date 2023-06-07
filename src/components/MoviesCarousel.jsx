import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MoviesCarousel(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const tipo = props.tipo;
    get(`/movie/${tipo}`).then((data) => {
      setMovies(data.results);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  return (
    <div className="carousel">
      <div className="">
        <h3>{props.subtitulo}</h3>
        <a className="" href="/">
          Mostrar Todo
        </a>
      </div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}
