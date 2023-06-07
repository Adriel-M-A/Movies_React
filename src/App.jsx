import { NavBar } from "./components/NavBar";
import { MoviesCarousel } from "./components/MoviesCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesGrid } from "./components/MoviesGrid";

function App() {
  return (
    <div className="flex flex-col justify-center max-w-[1500px] mx-auto">
      <header>
        <NavBar />
      </header>
      <Router>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MoviesCarousel
                    subtitulo="Peliculas Populares"
                    tipo="popular"
                  />
                  <MoviesCarousel
                    subtitulo="Peliculas Nuevas"
                    tipo="now_playing"
                  />
                  <MoviesCarousel subtitulo="Proximamente" tipo="upcoming" />
                </>
              }
            />
            <Route path="/popular" element={<MoviesGrid tipo="popular" />} />
            <Route path="/nuevo" element={<MoviesGrid tipo="now_playing" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
