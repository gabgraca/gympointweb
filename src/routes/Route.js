import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

// Cria objeto Route do React, porém todas as rotas
// passarão por esta função antes, o objetivo é
// validar se são todas privadas(onde o usuário precisa estar logado)
// ou publicas
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth; // Flag de usuário logado

  // Se o usuário não está logado e a rota é privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se o usuário está logado e a rota não é privada
  if (signed && !isPrivate) {
    return <Redirect to="/students/managestudents" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,

  // Como o componente do react pode ser uma classe ou uma função
  // é utilizado este oneOfType na sua definição
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
