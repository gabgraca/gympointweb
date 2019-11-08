import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
