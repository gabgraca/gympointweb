import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterButton from '../../../components/Controls/RegisterButton';
import history from '../../../services/history';
import api from '../../../services/api';
// import Popup from '../../../components/Popup';
import { Container, Top, List } from './styles';
import { formatPrice } from '../../../util/format';

export default function ManagePlans() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('/plans');

    const data = response.data.map(plan => ({
      ...plan,
      priceFormatted: formatPrice(plan.price),
    }));

    setPlans(data);
  }

  // evento ao iniciar a tela
  // utilizado para carregar os planos da API
  useEffect(() => {
    loadPlans();
  }, []);

  function handleButtonClick() {
    history.push('/plans/newplan');
  }

  return (
    <Container>
      <Top>
        <strong>Gerenciando Planos</strong>
        <div>
          <RegisterButton onClick={handleButtonClick} />
        </div>
      </Top>
      <List>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                {plan.duration === 1
                  ? `${plan.duration} mês`
                  : `${plan.duration} meses`}
              </td>
              <td>{plan.priceFormatted}</td>
              <td>
                <Link to={`/plans/${plan.id}/edit`}>Editar</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => console.tron.log('apagar')}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
