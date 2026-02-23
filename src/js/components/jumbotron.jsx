// Define el componente funcional Jumbotron.
const Jumbotron = () => {
  // Retorna el contenido visual principal de bienvenida.
  return (
    // Contenedor general del componente.
    <div>
      {/* Sección principal con estilo tipo jumbotron. */}
      <div className="p-5 bg-light rounded-3">
        {/* Contenedor fluido con padding vertical interno. */}
        <div className="container-fluid py-5">
          {/* Título principal destacado. */}
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          {/* Párrafo descriptivo del bloque principal. */}
          <p className="fs-4">
            {/* Texto de ejemplo del contenido. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          {/* Botón de llamada a la acción. */}
          <button className="btn btn-primary btn-lg" type="button">
            {/* Etiqueta visible del botón. */}
            Call to action!
          </button>
        </div>
      </div>

      {/* Sección adicional con grid de Bootstrap. */}
      <div className="container text-center mt-4">
        {/* Primera fila del grid. */}
        <div className="row">
          {/* Primera columna vacía de la fila. */}
          <div className="col"></div>
          {/* Segunda columna vacía de la fila. */}
          <div className="col"></div>
        </div>
        {/* Segunda fila del grid con margen superior. */}
        <div className="row mt-3">
          {/* Primera columna vacía de la segunda fila. */}
          <div className="col"></div>
          {/* Segunda columna vacía de la segunda fila. */}
          <div className="col"></div>
          {/* Tercera columna vacía de la segunda fila. */}
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
// Exporta el componente Jumbotron para su uso en otras vistas.
export default Jumbotron;
