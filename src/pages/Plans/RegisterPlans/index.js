import React from 'react';

import { Input } from '@rocketseat/unform';
// import { toast } from 'react-toastify';
import { Container, Top, Fields, BottomFields } from './styles';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import history from '../../../services/history';

export default function RegisterPlans() {
  function handleBackButton() {
    history.push('/plans/manageplans');
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
      <Fields>
        <strong>TÍTULO DO PLANO</strong>
        <Input type="text" name="title" />
        <BottomFields>
          <div>
            <strong>DURAÇÃO (em meses)</strong>
            <Input type="text" name="duration" />
          </div>
          <div>
            <strong>PREÇO MENSAL</strong>
            <Input type="text" name="price" />
          </div>
          <div>
            <strong>PREÇO TOTAL</strong>
            <Input type="text" name="price" className="locked" disabled />
          </div>
        </BottomFields>
      </Fields>
    </Container>
  );
}
