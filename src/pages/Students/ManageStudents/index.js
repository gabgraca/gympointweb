import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Top, Search, List } from './styles';
import history from '../../../services/history';
import api from '../../../services/api';

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [readStudents, setReadStudents] = useState([]);

  function handleButtonClick() {
    history.push('/students/newstudent');
  }
  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
      setReadStudents(response.data);
    }

    loadStudents();
  }, []);

  function handleSearch(e) {
    const { value } = e.target;

    if (value) {
      const filteredStudents = readStudents.filter(
        student =>
          String(student.nome).includes(value) ||
          String(student.email).includes(value) ||
          String(student.idade).includes(value)
      );
      setStudents(filteredStudents);
    } else {
      setStudents(readStudents);
    }
  }

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
            <input
              type="text"
              placeholder="Buscar aluno"
              onChange={handleSearch}
            />
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
                <Link to={`/students/${student.id}/edit`}>Editar</Link>
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
