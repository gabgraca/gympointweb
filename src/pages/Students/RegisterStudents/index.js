import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Top, Fields, BottomFields } from './styles';
import history from '../../../services/history';
import api from '../../../services/api';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O nome é obrigatório')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Formato incorreto'),
  email: Yup.string()
    .email('Formato de e-mail incorreto')
    .required('Campo Obrigatório'),
  idade: Yup.number('Somente números').required('Campo Obrigatório'),
  peso: Yup.number('Somente números').required('Campo Obrigatório'),
  altura: Yup.number('Somente números').required('Campo Obrigatório'),
});

export default function RegisterStudents() {
  // Carrega o id da URL (se existir)
  const { id } = useParams();
  const [student, setStudent] = useState({});

  async function readStudent(studentId) {
    const response = await api.get(`/students/${studentId}`);
    setStudent(response.data);
  }

  useEffect(() => {
    // Verifica se existe ID lido dos parâmetros da URL
    if (id) {
      // Carrega os dados do estudante
      readStudent(id);
    }
  }, [id]);

  function handleBackButton() {
    history.push('/students/managestudents');
  }
  async function handleSubmit({ nome, email, idade, peso, altura }) {
    try {
      if (!id) {
        await api.post('/students', {
          nome,
          email,
          idade,
          peso,
          altura,
        });
      } else {
        await api.put('/students', {
          id,
          nome,
          email,
          idade,
          peso,
          altura,
        });
      }
      toast.success('Cadastro realizado com sucesso');
      history.push('/students/managestudents');
    } catch (err) {
      if (err.response.data.error) {
        toast.error(`Erro no cadastro: ${err.response.data.error}`);
      } else {
        toast.error('Erro no cadastro');
      }
    }
  }
  return (
    <Container>
      <Top>
        <strong>Cadastro de Aluno</strong>
        <SaveAndBackButtons backClick={handleBackButton} formName="dados" />
      </Top>
      <Fields
        schema={schema}
        id="dados"
        onSubmit={handleSubmit}
        initialData={student}
      >
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
