import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { addMonths, format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import SaveAndBackButtons from '../../../components/Controls/SaveAndBackButtons';
import ReactAsync from '../../../components/ReactAsync';
import ReactDate from '../../../components/ReactDate';
import { Container, Top, Fields, BottomFields } from './styles';
import { formatPrice } from '../../../util/format';

export default function RegisterEnrollments() {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [plan, setPlan] = useState({});
  const [plans, setPlans] = useState([]);
  const [date, setDate] = useState(new Date());
  const [iniDate, setIniDate] = useState(new Date());
  const [iniPlan, setIniPlan] = useState({});
  const [iniStudent, setIniStudent] = useState({});

  const [selectPlans, setSelectPlans] = useState([]);

  const iniEnrollment = useMemo(() => {
    if (iniDate) {
      setDate(iniDate);
    }
    if (iniPlan) {
      setPlan(iniPlan);
    }
    return {
      dtini: iniDate,
      alunoselect: iniStudent,
      plano: iniPlan,
    };
  }, [iniStudent, iniDate, iniPlan]);

  const finValue = useMemo(() => {
    if (plan.value) {
      const choosenPlan = plans.find(
        fplan => String(plan.value) === String(fplan.id)
      );
      if (choosenPlan) {
        return formatPrice(choosenPlan.duration * choosenPlan.price);
      }
    }
    return '';
  }, [plan, plans]);

  const dtTermino = useMemo(() => {
    if (plan.value && date) {
      const choosenPlan = plans.find(
        fplan => String(plan.value) === String(fplan.id)
      );
      if (choosenPlan) {
        return format(addMonths(date, choosenPlan.duration), 'dd/MM/yyyy');
      }
    }
    return '';
  }, [plan, date, plans]);

  function filterStudents(inputValue) {
    // Substituir pela leitura dos estudantes através da API com Filtro!!!!
    // Não sei se realmente é necessário por conta de eu já selecionar todos
    // e conseguir fazer o filtro direto
    if (inputValue) {
      return students.filter(student =>
        String(student.label)
          .toLowerCase()
          .includes(String(inputValue).toLowerCase())
      );
    }
    return students;
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStudents(inputValue));
    }, 10);
  };

  function handleBackButton() {
    history.push('/enrollments/manageenrollments');
  }

  async function loadPageObjects() {
    const responseStudents = await api.get('students');
    const preStudents = [];
    responseStudents.data.sort(function e(a, b) {
      return a.nome.localeCompare(b.nome);
    });
    responseStudents.data.forEach(aluno => {
      preStudents.push({
        value: aluno.id,
        label: aluno.nome,
      });
    });
    setStudents(preStudents);

    const prePlans = [];
    const responsePlans = await api.get('plans');
    responsePlans.data.forEach(fplan => {
      prePlans.push({
        value: fplan.id,
        label: fplan.title,
      });
    });
    setSelectPlans(prePlans);
    setPlans(responsePlans.data);

    if (id) {
      const responseEnrollments = await api.get(`/enrollments/${id}/`);
      if (responseEnrollments.data) {
        setIniDate(parseISO(responseEnrollments.data.start_date));

        setIniStudent(
          preStudents.find(
            fstudent =>
              String(fstudent.value) ===
              String(responseEnrollments.data.student_id)
          )
        );

        setIniPlan(
          prePlans.find(
            fplan =>
              String(fplan.value) === String(responseEnrollments.data.plan_id)
          )
        );
      }
    }
  }

  useEffect(() => {
    loadPageObjects();
  }, []); // eslint-disable-line

  function handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
  }
  async function handleSubmit({ plano, alunoselect, dtini }) {
    // Verifica se é para criar um registro novo ou
    // se é para atualizar

    try {
      if (!id) {
        await api.post(`/enrollments/${plano}`, {
          student_id: alunoselect,
          start_date: dtini,
        });
      } else {
        await api.put(`/enrollments/${id}`, {
          plan_id: plano,
          student_id: alunoselect,
          start_date: dtini,
        });
      }
      toast.success('Cadastro realizado com sucesso');
      history.push('/enrollments/manageenrollments');
    } catch (err) {
      if (err.response.data.error) {
        toast.error(`Erro no cadastro: ${err.response.data.error}`);
      } else {
        toast.error('Erro no cadastro');
      }
    }
  }
  return (
    <>
      <Container>
        <Top>
          <strong>Cadastro de Matrícula</strong>
          <div>
            <SaveAndBackButtons
              formName="dados"
              backClick={() => handleBackButton()}
            />
          </div>
        </Top>
        <Fields initialData={iniEnrollment} id="dados" onSubmit={handleSubmit}>
          <strong>ALUNO</strong>

          <ReactAsync
            name="alunoselect"
            defaultOptions={students}
            loadOptions={loadOptions}
            placeholder="Selecione o aluno..."
            onInputChange={handleInputChange}
          />

          <BottomFields>
            <div className="divs">
              <strong>PLANO</strong>
              <div>
                <ReactAsync
                  name="plano"
                  defaultOptions={selectPlans}
                  placeholder="Planos..."
                  handleInputChange={e => setPlan(e)}
                />
              </div>
            </div>
            <div className="divs">
              <strong>DATA DE INÍCIO</strong>
              <ReactDate name="dtini" handleInputChange={e => setDate(e)} />
            </div>
            <div className="divs">
              <strong>DATA DE TÉRMINO</strong>
              <input
                type="text"
                className="locked"
                disabled
                value={dtTermino}
              />
            </div>
            <div className="divs">
              <strong>VALOR FINAL</strong>
              <input type="text" className="locked" disabled value={finValue} />
            </div>
          </BottomFields>
        </Fields>
      </Container>
    </>
  );
}
