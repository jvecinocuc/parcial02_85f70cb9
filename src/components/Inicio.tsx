import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Inicio: React.FC = () => {
  return (
    <div>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1>Bienvenido a Conciertos Star</h1>
        <p>Plataforma para la administración de conciertos de los mejores artistas.</p>
        <Button variant="primary">Ver más</Button>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="imagen1.jpg" alt="Concierto 1" />
          <Carousel.Caption>
            <h3>Concierto 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="imagen2.jpg" alt="Concierto 2" />
          <Carousel.Caption>
            <h3>Concierto 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Inicio;
