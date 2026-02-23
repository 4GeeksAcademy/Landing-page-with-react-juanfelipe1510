// Define el componente funcional Card y recibe sus props.
const Card = ({ title, description, buttonText, imgSrc }) => {
  // Retorna la estructura visual de la tarjeta.
  // Contenedor principal de la tarjeta.
  return (
    <div className="card">
      {/* Muestra la imagen superior de la tarjeta usando la URL recibida. */}
      <img src={imgSrc} className="card-img-top" alt="..." />
      {/* Cuerpo de la tarjeta donde va el contenido textual y el botón. */}
      <div className="card-body">
        {/* Título principal de la tarjeta. */}
        <h5 className="card-title">{title}</h5>
        {/* Descripción de la tarjeta. */}
        <p className="card-text">{description}</p>
        {/* Enlace con estilo de botón para la acción principal. */}
        <a href="#" className="btn btn-primary">
          {/* Texto que se muestra dentro del botón. */}
          {buttonText}
        </a>
      </div>
    </div>
  );
};
// Exporta el componente Card para poder usarlo en otros archivos.
export default Card;