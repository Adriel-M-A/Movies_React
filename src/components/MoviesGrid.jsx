import { MovieCard } from "./MovieCard";
import { getMovies } from "../utils/httpClient";
import { useEffect, useState } from "react";

function Pagination({ totalPages, currentPage, handlePageChange }) {
  const pageNumbers = [];
  const maxVisibleButtons = 10;

  for (let i = 1; i <= Math.min(totalPages, maxVisibleButtons); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="my-10">
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="mr-2">
            <button
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 border rounded ${
                number === currentPage ? "bg-blue-500 text-white" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MoviesGrid(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const tipo = props.tipo;
    get(`/movie/${tipo}?page=${currentPage}`).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [props.tipo, currentPage]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Peliculas Populares</h2>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <ul className="grid grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}
