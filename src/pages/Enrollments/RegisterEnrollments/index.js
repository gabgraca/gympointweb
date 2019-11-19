import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import history from '../../../services/history';
import api from '../../../services/api';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import ReactAsync from '../../../components/ReactAsync';
import { Container, Top, Fields, BottomFields } from './styles';

export default function RegisterEnrollments() {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectPlans, setSelectPlans] = useState([]);

  function filterStudents(inputValue) {
    // Substituir pela leitura dos estudantes através da API com Filtro!!!!
    if (inputValue) {
      return students.filter(student =>
        String(student.label)
          .toLowerCase()
          .includes(String(inputValue).toLowerCase())
      );
    }
    return students;
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStudents(inputValue));
    }, 10);
  };

  function handleBackButton() {
    history.push('/enrollments/manageenrollments');
  }

  async function loadStudents() {
    const response = await api.get('students');
    const preStudents = [];
    response.data.sort(function e(a, b) {
      return a.nome.localeCompare(b.nome);
    });
    response.data.forEach(aluno => {
      preStudents.push({
        value: aluno.id,
        label: aluno.nome,
      });
    });
    setStudents(preStudents);
  }

  async function loadPlans() {
    const prePlans = [];
    const response = await api.get('plans');
    response.data.forEach(plan => {
      prePlans.push({
        value: plan.id,
        label: plan.title,
      });
    });
    setSelectPlans(prePlans);
    setPlans(response.data);
  }
  useEffect(() => {
    loadStudents();
    loadPlans();
  }, []);// eslint-disable-line

  function handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
  }
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <Container>
        <Top>
          <strong>Cadastro de Matrícula</strong>
          <div>
            <SaveAndBackButtons
              formName="dados"
              backClick={() => handleBackButton()}
            />
          </div>
        </Top>
        <Fields id="dados" onSubmit={handleSubmit}>
          <strong>ALUNO</strong>

          <ReactAsync
            name="alunoselect"
            defaultOptions={students}
            loadOptions={loadOptions}
            placeholder="Selecione o aluno..."
            onInputChange={handleInputChange}
          />

          <BottomFields>
            <div className="divs">
              <strong>PLANO</strong>
              <div>
                <ReactAsync
                  name="plano"
                  defaultOptions={selectPlans}
                  placeholder="Planos..."
                />
              </div>
            </div>
            <div className="divs">
              <strong>DATA DE INÍCIO</strong>
              <div>
                <Input
                  className="UnformInput"
                  type="text"
                  name="dtini"
                  placeholder="Escolha a data"
                />
              </div>
            </div>
            <div className="divs">
              <strong>DATA DE TÉRMINO</strong>
              <input type="text" className="locked" disabled value={0} />
            </div>
            <div className="divs">
              <strong>VALOR FINAL</strong>
              <input type="text" className="locked" disabled value={0} />
            </div>
          </BottomFields>
        </Fields>
      </Container>
    </>
  );
}
