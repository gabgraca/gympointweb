import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyles from './styles/global';

// Utilizado para realizar a navegação entre as rotas das páginas
import history from './services/history';

// Store do redux, deve vir sempre após a importação da config do reactotron
// o persistor é utilizado para puxar do browser informações da aplicação
// que estão salvas no localstorage, no caso o usuário logado
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={1500} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
