export function NavBar() {
  return (
    <header className="">
      <div className="">
        <h2>LOGO</h2>
      </div>

      <nav className="">
        <ul className="">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mejores">Mejores</a>
          </li>
          <li>
            <a href="/nuevo">Nuevo</a>
          </li>
          <li>
            <a href="/popular">Popular</a>
          </li>
        </ul>
      </nav>

      <div className="">
        <form>
          <input type="text" placeholder="Buscar" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
}
