import React from 'react';

const artistas = [
  { id: 1, nombre: 'Shakira', genero: 'Pop', descripcion: 'Cantante colombiana de gran trayectoria internacional.' },
  { id: 2, nombre: 'Carlos Vives', genero: 'Vallenato', descripcion: 'Cantante y compositor que fusiona el vallenato con pop y rock.' },
  { id: 3, nombre: 'J Balvin', genero: 'Reggaeton', descripcion: 'Uno de los exponentes más importantes del reggaeton a nivel mundial.' },
];

const ListarArtistas: React.FC = () => {
  return (
    <div className="container">
      <h2 className="my-4">Listado de Artistas</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Género Musical</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {artistas.map(artista => (
            <tr key={artista.id}>
              <td>{artista.nombre}</td>
              <td>{artista.genero}</td>
              <td>{artista.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarArtistas;
