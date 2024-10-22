import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Inicio from './components/Inicio';
// Otros componentes...

const App: React.FC = () => {
  return (
    <Router>
      <Cabecera />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/registrar-artistas" component={RegistrarArtistas} />
        <Route path="/listar-artistas" component={ListarArtistas} />
        <Route path="/administrar-artistas" component={AdministrarArtistas} />
        <Route path="/acerca" component={Acerca} />
        <Route path="*" component={PaginaNoEncontrada} />
      </Switch>
    </Router>
  );
};

export default App;
