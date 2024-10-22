import React, { useState } from 'react';

const initialArtistas = [
  { id: 1, nombre: 'Shakira', genero: 'Pop', descripcion: 'Cantante colombiana de gran trayectoria internacional.' },
  { id: 2, nombre: 'Carlos Vives', genero: 'Vallenato', descripcion: 'Cantante y compositor que fusiona el vallenato con pop y rock.' },
  { id: 3, nombre: 'J Balvin', genero: 'Reggaeton', descripcion: 'Uno de los exponentes más importantes del reggaeton a nivel mundial.' },
];

const AdministrarArtistas: React.FC = () => {
  const [artistas, setArtistas] = useState(initialArtistas);

  const eliminarArtista = (id: number) => {
    const nuevosArtistas = artistas.filter(artista => artista.id !== id);
    setArtistas(nuevosArtistas);
  };

  return (
    <div className="container">
      <h2 className="my-4">Administrar Artistas</h2>
      {artistas.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Género Musical</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {artistas.map(artista => (
              <tr key={artista.id}>
                <td>{artista.nombre}</td>
                <td>{artista.genero}</td>
                <td>{artista.descripcion}</td>
                <td>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => eliminarArtista(artista.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay artistas para administrar.</p>
      )}
    </div>
  );
};

export default AdministrarArtistas;
