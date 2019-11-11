import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }, { resetForm }) {
    dispatch(signInRequest(email, password));
    resetForm();
  }
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <span>GYMPOINT</span>
      <Form onSubmit={handleSubmit}>
        <p>SEU E-MAIL</p>
        <Input type="email" name="email" />
        <p>SUA SENHA</p>
        <Input type="password" name="password" />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
