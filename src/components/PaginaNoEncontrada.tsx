import React from 'react';
import { Link } from 'react-router-dom';

const PaginaNoEncontrada: React.FC = () => {
  return (
    <div className="container">
      <h2 className="my-4">Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
    </div>
  );
};

export default PaginaNoEncontrada;
