import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import RegisterButton from '../../../components/Controls/RegisterButton';
import { Container, Top, List } from './styles';
import history from '../../../services/history';

export default function ManageEnrollments() {
  function handleButtonClick() {
    history.push('/enrollments/newenrollment');
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
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle color="#DDDDDD" height="23px" />
              </td>
              <td>
                <Link to="/">Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('Apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle color="#42CB59" height="23px" />
              </td>
              <td>
                <Link to="/">Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('Apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle color="#DDDDDD" height="23px" />
              </td>
              <td>
                <Link to="/">Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('Apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle color="#42CB59" height="23px" />
              </td>
              <td>
                <Link to="/">Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('Apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle color="#DDDDDD" height="23px" />
              </td>
              <td>
                <Link to="/">Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('Apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
          </tbody>
        </List>
      </Container>
    </>
  );
}
