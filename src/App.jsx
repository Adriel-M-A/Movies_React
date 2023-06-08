import { NavBar } from "./components/NavBar";
import { MoviesCarousel } from "./components/MoviesCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesGrid } from "./components/MoviesGrid";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center max-w-[1500px] mx-auto">
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MoviesCarousel
                    subtitulo="Peliculas Populares"
                    tipo="popular"
                    url="/popular"
                  />
                  <MoviesCarousel
                    subtitulo="Peliculas Nuevas"
                    tipo="now_playing"
                    url="/nuevo"
                  />
                  <MoviesCarousel subtitulo="Proximamente" tipo="upcoming" />
                </>
              }
            />
            <Route path="/mejores" element={<MoviesGrid tipo="top_rated" />} />
            <Route path="/nuevo" element={<MoviesGrid tipo="now_playing" />} />
            <Route path="/popular" element={<MoviesGrid tipo="popular" />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
