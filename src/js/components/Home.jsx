// Importa React para poder definir componentes JSX.
import React from "react";
// Importa el componente de barra de navegación.
import Navbar from "./navbar";
// Importa el componente de jumbotron principal.
import Jumbotron from "./jumbotron";
// Importa el componente reutilizable de tarjeta.
import Card from "./card";
// Importa el componente de pie de página.
import Footer from "./footer";

// Define el componente principal Home.
const Home = () => {
  // Declara un arreglo de objetos con la información de las tarjetas.
  const cards = [
    // Primer objeto de tarjeta.
    {
      // Título de la tarjeta.
      title: "Card title 1",
      // Descripción de la tarjeta.
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // Texto del botón de acción.
      buttonText: "Find Out More!",
      // URL de la imagen de la tarjeta.
      imgSrc: "https://via.placeholder.com/500x325",
    },
    // Segundo objeto de tarjeta.
    {
      // Título de la tarjeta.
      title: "Card title 2",
      // Descripción de la tarjeta.
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // Texto del botón de acción.
      buttonText: "Find Out More!",
      // URL de la imagen de la tarjeta.
      imgSrc: "https://via.placeholder.com/500x325",
    },
    // Tercer objeto de tarjeta.
    {
      // Título de la tarjeta.
      title: "Card title 3",
      // Descripción de la tarjeta.
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // Texto del botón de acción.
      buttonText: "Find Out More!",
      // URL de la imagen de la tarjeta.
      imgSrc: "https://via.placeholder.com/500x325",
    },
    // Cuarto objeto de tarjeta.
    {
      // Título de la tarjeta.
      title: "Card title 4",
      // Descripción de la tarjeta.
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // Texto del botón de acción.
      buttonText: "Find Out More!",
      // URL de la imagen de la tarjeta.
      imgSrc: "https://via.placeholder.com/500x325",
    },
  ];

  // Retorna la estructura principal de la página.
  return (
    // Fragmento que agrupa múltiples elementos sin crear un nodo extra.
    <>
      {/* Renderiza la barra de navegación en la parte superior. */}
      <Navbar />
      {/* Contenedor principal con margen vertical. */}
      <div className="container my-4">
        {/* Renderiza el bloque destacado principal. */}
        <Jumbotron />
        {/* Fila que contiene las tarjetas. */}
        <div className="row">
          {/* Recorre el arreglo de tarjetas y renderiza una columna por cada una. */}
          {cards.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              {/* Renderiza el componente Card pasando cada propiedad. */}
              {/* Pasa título, descripción, texto de botón e imagen al componente Card. */}
              <Card
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                imgSrc={card.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Renderiza el pie de página al final. */}
      <Footer />
    </>
  );
};

// Exporta el componente Home como predeterminado.
export default Home;
