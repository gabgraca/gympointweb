import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Top, Search, List } from './styles';
import RegisterButton from '../../../components/Controls/RegisterButton';
import history from '../../../services/history';
import api from '../../../services/api';
import Popup from '../../../components/Popup';

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [readStudents, setReadStudents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [studentIdToDel, setStudentIdToDel] = useState('');

  function handleButtonClick() {
    history.push('/students/newstudent');
  }

  async function loadStudents() {
    const response = await api.get('students');

    setStudents(response.data);
    setReadStudents(response.data);
  }

  useEffect(() => {
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

  function showPopupToDel(studentId) {
    setStudentIdToDel(studentId);
    setShowPopup(true);
  }

  async function handleYes() {
    await api.delete(`/students/${studentIdToDel}`);

    loadStudents();
    setShowPopup(false);
  }

  function handleNo() {
    setShowPopup(false);
  }
  return (
    <>
      <Container>
        <Top>
          <strong>Gerenciando Alunos</strong>
          <div>
            <RegisterButton onClick={handleButtonClick} />
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
                  <button
                    type="button"
                    onClick={() => showPopupToDel(student.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
      </Container>
      {showPopup ? (
        <Popup
          title="Deseja mesmo excluir o registro?"
          handleYes={handleYes}
          handleNo={handleNo}
        />
      ) : null}
    </>
  );
}
