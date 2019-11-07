import React from 'react';

import { Container, Top } from './styles';

export default function ManageStudents() {
  return (
    <Container>
      <Top>
        <strong>Gerenciando Alunos</strong>
        <button type="button">Cadastrar</button>
        <input type="text" placeholder="Buscar aluno" />
      </Top>
    </Container>
  );
}
