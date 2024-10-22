import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Inicio from './components/Inicio';
import RegistrarArtistas from './components/RegistrarArtistas';
import ListarArtistas from './components/ListarArtistas';
import AdministrarArtistas from './components/AdministrarArtistas';
import Acerca from './components/Acerca';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';

const App: React.FC = () => {
  return (
    <Router>
      <Cabecera />
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Inicio />} />
        
        {/* Ruta para registrar artistas */}
        <Route path="/registrar-artistas" element={<RegistrarArtistas />} />
        
        {/* Ruta para listar artistas */}
        <Route path="/listar-artistas" element={<ListarArtistas />} />
        
        {/* Ruta para administrar artistas */}
        <Route path="/administrar-artistas" element={<AdministrarArtistas />} />
        
        {/* Ruta para la página "Acerca de" */}
        <Route path="/acerca" element={<Acerca />} />
        
        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </Router>
  );
};

export default App;
