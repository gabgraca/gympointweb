import React, { useState, useEffect, useMemo } from 'react';

import { Input } from '@rocketseat/unform';
// import { toast } from 'react-toastify';
import { Container, Top, Fields, BottomFields } from './styles';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

export default function RegisterPlans() {
  function handleBackButton() {
    history.push('/plans/manageplans');
  }

  const [plan, setPlan] = useState({});
  // const [totalPrice, setTotalPrice] = useState(0);

  const totalPrice = useMemo(() => {
    if (plan.duration && plan.price) {
      return formatPrice(plan.duration * plan.price);
    }
    return formatPrice(0);
  }, [plan.duration, plan.price]);

  useEffect(() => {
    setPlan({
      title: 'teste do gab',
      duration: 12,
      price: 0,
    });
  }, []);

  // function calculateTotalPrice() {}
  return (
    <Container>
      <Top>
        <strong>Cadastro de plano</strong>
        <SaveAndBackButtons
          formName="dados"
          backClick={() => handleBackButton()}
        />
      </Top>
      <Fields initialData={plan}>
        <strong>TÍTULO DO PLANO</strong>
        <Input
          type="text"
          name="title"
          onChange={e => setPlan({ ...plan, title: e.target.value })}
        />
        <BottomFields>
          <div>
            <strong>DURAÇÃO (em meses)</strong>
            <Input
              type="number"
              name="duration"
              onChange={e => setPlan({ ...plan, duration: e.target.value })}
            />
          </div>
          <div>
            <strong>PREÇO MENSAL</strong>
            <Input
              type="number"
              name="price"
              onChange={e => setPlan({ ...plan, price: e.target.value })}
            />
          </div>
          <div>
            <strong>PREÇO TOTAL</strong>
            <input type="text" className="locked" disabled value={totalPrice} />
          </div>
        </BottomFields>
      </Fields>
    </Container>
  );
}
