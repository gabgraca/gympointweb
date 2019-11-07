import React from 'react';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <span>GYMPOINT</span>
      <form>
        <p>SEU E-MAIL</p>
        <input type="email" name="mail" />
        <p>SUA SENHA</p>
        <input type="password" />
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
