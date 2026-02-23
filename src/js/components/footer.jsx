// Define el componente funcional Footer.
const Footer = () => {
  // Retorna el pie de página de la aplicación.
  // Contenedor footer con estilos de fondo oscuro, texto blanco, centrado y espaciado vertical.
  return (
    <footer className="bg-dark text-white text-center py-3">
      {/* Muestra el texto de copyright. */}
      <p className="mb-0">Copyright © Your Website 2019</p>
    </footer>
  );
};
// Exporta el componente Footer para usarlo en otras vistas.
export default Footer;