import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex-shrink-0">
        <h2 className="text-2xl font-bold text-blue-500">LOGO</h2>
      </div>

      <div className="flex-grow flex justify-center">
        <nav>
          <ul className="inline-flex space-x-4">
            <li>
              <Link
                className="text-gray-500 hover:bg-gray-200 rounded px-2 py-1 transition-colors duration-200"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:bg-gray-200 rounded px-2 py-1 transition-colors duration-200"
                to="/mejores"
              >
                Mejores
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:bg-gray-200 rounded px-2 py-1 transition-colors duration-200"
                to="/nuevo"
              >
                Nuevo
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:bg-gray-200 rounded px-2 py-1 transition-colors duration-200"
                to="/popular"
              >
                Popular
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-shrink-0">
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Buscar"
            className="border rounded px-2 py-1"
          />
          <button
            type="submit"
            className="border rounded px-4 py-1 bg-blue-500 text-white"
          >
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}
