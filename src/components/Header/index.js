import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Content } from './styles';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function Header() {
  const name = useSelector(state => state.auth.name);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPont" />
          <span>GYMPOINT</span>

          <NavLink
            to="/students/managestudents"
            activeStyle={{ color: '#444444' }}
          >
            ALUNOS
          </NavLink>
          <NavLink to="/plans/manageplans" activeStyle={{ color: '#444444' }}>
            PLANOS
          </NavLink>
          <NavLink
            to="/enrollments/manageenrollments"
            activeStyle={{ color: '#444444' }}
          >
            MATRÍCULAS
          </NavLink>
          <NavLink to="/helporders" activeStyle={{ color: '#444444' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>
        <aside>
          <strong>{name}</strong>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
