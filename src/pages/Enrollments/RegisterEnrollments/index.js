import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import history from '../../../services/history';
import api from '../../../services/api';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import { Container, Top, Fields, BottomFields } from './styles';

export default function RegisterEnrollments() {
  const [students, setStudents] = useState([]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#999999' : '#999999',
    }),
    control: () => ({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      display: 'flex',
      height: '45px',
      marginTop: '8px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#999999',
    }),
  };

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

  useEffect(() => {
    loadStudents();
  }, []);// eslint-disable-line

  function handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
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
        <Fields>
          <strong>ALUNO</strong>
          <div>
            <AsyncSelect
              cacheOptions
              defaultOptions={students}
              loadOptions={loadOptions}
              styles={customStyles}
              placeholder="Selecione o aluno..."
              onInputChange={handleInputChange}
            />
          </div>
          <BottomFields>
            <div>
              <strong>PLANO</strong>
              <Input
                className="UnformInput"
                type="text"
                name="plano"
                placeholder="Selecione o plano"
              />
            </div>
            <div>
              <strong>DATA DE INÍCIO</strong>
              <Input
                className="UnformInput"
                type="text"
                name="dtini"
                placeholder="Escolha a data"
              />
            </div>
            <div>
              <strong>DATA DE TÉRMINO</strong>
              <input type="text" className="locked" disabled value={0} />
            </div>
            <div>
              <strong>VALOR FINAL</strong>
              <input type="text" className="locked" disabled value={0} />
            </div>
          </BottomFields>
        </Fields>
      </Container>
    </>
  );
}
