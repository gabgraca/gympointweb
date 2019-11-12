import React, { useState, useEffect, useMemo } from 'react';

import { Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Top, Fields, BottomFields } from './styles';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

export default function RegisterPlans() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});

  function handleBackButton() {
    history.push('/plans/manageplans');
  }

  const totalPrice = useMemo(() => {
    if (plan.duration && plan.price) {
      return formatPrice(plan.duration * plan.price);
    }
    return formatPrice(0);
  }, [plan.duration, plan.price]);

  async function readPlan(planId) {
    const response = await api.get(`/plans/${planId}`);
    setPlan(response.data);
  }

  useEffect(() => {
    if (id) {
      readPlan(id);
    } else {
      setPlan({
        title: '',
        duration: 0.0,
        price: 0.0,
      });
    }
  }, [id]); //eslint-disable-line

  async function handleSubmit({ title, price, duration }) {
    try {
      if (!id) {
        await api.post('/plans', {
          title,
          price,
          duration,
        });
      } else {
        await api.put('/plans', {
          id,
          title,
          price,
          duration,
        });
      }
      toast.success('Cadastro realizado com sucesso');
      history.push('/plans/manageplans');
    } catch (err) {
      if (err.response.data.error) {
        toast.error(`Erro no cadastro: ${err.response.data.error}`);
      } else {
        toast.error('Erro no cadastro');
      }
    }
  }
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
      <Fields initialData={plan} id="dados" onSubmit={handleSubmit}>
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
