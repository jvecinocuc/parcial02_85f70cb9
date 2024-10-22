import React, { useState } from 'react';

const RegistrarArtistas: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Artista registrado:', { nombre, genero, descripcion });
    // Aquí puedes manejar el envío del formulario y la lógica de almacenamiento
  };

  return (
    <div className="container">
      <h2 className="my-4">Registrar Artista</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Artista</label>
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Género Musical</label>
          <input 
            type="text" 
            className="form-control" 
            id="genero" 
            value={genero} 
            onChange={(e) => setGenero(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea 
            className="form-control" 
            id="descripcion" 
            rows={3} 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar Artista</button>
      </form>
    </div>
  );
};

export default RegistrarArtistas;
