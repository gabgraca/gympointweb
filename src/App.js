import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';

// Utilizado para realizar a navegação entre as rotas das páginas
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
