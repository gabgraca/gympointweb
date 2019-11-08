import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Top, Search, List } from './styles';
import history from '../../../services/history';
import api from '../../../services/api';

export default function ManageStudents() {
  const [students, setStudents] = useState([]);

  function handleButtonClick() {
    history.push('/students/registerstudents');
  }
  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <Top>
        <strong>Gerenciando Alunos</strong>
        <div>
          <button type="button" onClick={handleButtonClick}>
            <MdAdd />
            CADASTRAR
          </button>
          <Search>
            <MdSearch />
            <input type="text" placeholder="Buscar aluno" />
          </Search>
        </div>
      </Top>

      <List>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>IDADE</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.nome}</td>
              <td>{student.email}</td>
              <td>{student.idade}</td>
              <td>
                <Link to="/students/registerstudents">Editar</Link>
              </td>
              <td>
                <Link to="/">Apagar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
