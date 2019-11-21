import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Top, List, AnswerScreen } from './styles';

export default function HelpOrders() {
  const [showAnswerScreen, setShowAnswerScreen] = useState(false);
  const [helpOrders, setHelpOrders] = useState([]);
  const [helpOrderAnswering, setHelpOrderAnswering] = useState({});
  const [answerText, setAnswerText] = useState('');

  async function loadHelpOrders() {
    const response = await api.get('help-orders');
    setHelpOrders(response.data);
  }

  function handleAnswerClick(orderId) {
    setAnswerText('');
    setHelpOrderAnswering(helpOrders.find(ho => ho.id === orderId));
    setShowAnswerScreen(true);
  }
  function handleTextChange(text) {
    setAnswerText(text);
  }

  async function handleAnswerButton() {
    if (answerText) {
      try {
        await api.post(`/help-orders/${helpOrderAnswering.id}/answer`, {
          answer: answerText,
        });
        toast.success('Resposta enviada com sucesso!');
        setShowAnswerScreen(false);
        loadHelpOrders();
      } catch (err) {
        if (err.response.data.error) {
          toast.error(`Erro ao enviar resposta: ${err.response.data.error}`);
        } else {
          toast.error('Erro ao enviar resposta');
        }
      }
    } else {
      toast.error('Resposta não pode ser vazia');
    }
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);
  return (
    <>
      <Container>
        <Top>
          <strong>Pedidos de auxílio</strong>
        </Top>
        <List>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {helpOrders.map(helpOrder => (
              <tr key={helpOrder.id}>
                <td>{helpOrder.Student.nome}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleAnswerClick(helpOrder.id)}
                  >
                    Responder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
      </Container>
      {showAnswerScreen ? (
        <AnswerScreen
          className="Fechar"
          clickable
          onClick={e => {
            // Verifica se clicou somente no div externo
            if (e.target === e.currentTarget) {
              setShowAnswerScreen(false);
            }
          }}
        >
          <div>
            <strong>PERGUNTA DO ALUNO</strong>
            <textarea
              readOnly
              className="Answer"
              value={helpOrderAnswering.question}
            />

            <strong>SUA RESPOSTA</strong>
            <textarea onChange={e => handleTextChange(e.target.value)} />
            <button type="button" onClick={() => handleAnswerButton()}>
              Responder aluno
            </button>
          </div>
        </AnswerScreen>
      ) : null}
    </>
  );
}
