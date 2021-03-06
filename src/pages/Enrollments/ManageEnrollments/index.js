import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import RegisterButton from '../../../components/Controls/RegisterButton';
import { Container, Top, List } from './styles';
import history from '../../../services/history';
import api from '../../../services/api';
import Popup from '../../../components/Popup';

export default function ManageEnrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [enrollmentIdToDel, setEnrollmentIdToDel] = useState('');
  function handleButtonClick() {
    history.push('/enrollments/newenrollment');
  }

  async function loadEnrollments() {
    const preEnrollments = [];

    const response = await api.get('enrollments');
    response.data.map(enrollment =>
      preEnrollments.push({
        ...enrollment,
        formattedStartDate: format(
          parseISO(enrollment.start_date),
          "d 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        formattedEndDate: format(
          parseISO(enrollment.end_date),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      })
    );
    setEnrollments(preEnrollments);
  }
  useEffect(() => {
    loadEnrollments();
  }, []);

  async function handleYes() {
    await api.delete(`/enrollments/${enrollmentIdToDel}`);

    loadEnrollments();
    setShowPopup(false);
  }

  function handleNo() {
    setShowPopup(false);
  }

  function showPopupToDel(enrollmentId) {
    setEnrollmentIdToDel(enrollmentId);
    setShowPopup(true);
  }

  return (
    <>
      <Container>
        <Top>
          <strong>Gerenciando Matrículas</strong>
          <div>
            <RegisterButton onClick={handleButtonClick} />
          </div>
        </Top>
        <List>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.Student.nome}</td>
                <td>{enrollment.Plan.title}</td>
                <td>{enrollment.formattedStartDate}</td>
                <td>{enrollment.formattedEndDate}</td>
                <td>
                  {enrollment.active ? (
                    <MdCheckCircle color="#42CB59" height="23px" />
                  ) : (
                    <MdCheckCircle color="#DDDDDD" height="23px" />
                  )}
                </td>
                <td>
                  <Link to={`/enrollments/${enrollment.id}/edit`}>Editar</Link>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showPopupToDel(enrollment.id)}
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
