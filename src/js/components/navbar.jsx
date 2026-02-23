// Define el componente funcional Navbar.
const Navbar = () => {
  // Retorna la estructura de la barra de navegación.
  return (
    // Etiqueta nav principal con estilos de Bootstrap.
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Contenedor para alinear y limitar el ancho del contenido. */}
      <div className="container">
        {/* Marca o nombre del sitio en la barra de navegación. */}
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        {/* Botón que aparece en pantallas pequeñas para abrir/cerrar el menú. */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Ícono visual del botón hamburguesa. */}
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Contenedor colapsable de los enlaces de navegación. */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista de enlaces alineada al final (derecha). */}
          <ul className="navbar-nav ms-auto">
            {/* Elemento de menú Home. */}
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            {/* Elemento de menú About. */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            {/* Elemento de menú Services. */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            {/* Elemento de menú Contact. */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Exporta el componente Navbar para usarlo en otras partes del proyecto.
export default Navbar;