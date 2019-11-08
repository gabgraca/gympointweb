import React from 'react';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { Container, Top, Fields, BackButton, BottomFields } from './styles';
import history from '../../../services/history';
import api from '../../../services/api';

export default function RegisterStudents() {
  function handleBackButton() {
    history.push('/students/managestudents');
  }
  async function handleSubmit({ nome, email, idade, peso, altura }) {
    try {
      await api.post('/students', {
        nome,
        email,
        idade,
        peso,
        altura,
      });

      history.push('/students/managestudents');
    } catch (err) {
      console.tron.log('erro');
    }
  }
  return (
    <Container>
      <Top>
        <strong>Cadastro de Aluno</strong>
        <div>
          <div>
            <MdKeyboardArrowLeft />
            <BackButton type="button" onClick={handleBackButton}>
              VOLTAR
            </BackButton>
          </div>
          <div>
            <MdCheck />
            <button type="submit" form="dados">
              SALVAR
            </button>
          </div>
        </div>
      </Top>
      <Fields id="dados" onSubmit={handleSubmit}>
        <strong>NOME COMPLETO</strong>
        <Input type="text" name="nome" />
        <strong>ENDEREÇO DE E-MAIL</strong>
        <Input type="text" name="email" />
        <BottomFields>
          <div>
            <strong>IDADE</strong>
            <Input type="text" name="idade" />
          </div>
          <div>
            <strong>PESO (em kg)</strong>
            <Input type="text" name="peso" />
          </div>
          <div>
            <strong>ALTURA</strong>
            <Input type="text" name="altura" />
          </div>
        </BottomFields>
      </Fields>
    </Container>
  );
}
