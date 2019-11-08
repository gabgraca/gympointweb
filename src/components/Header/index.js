import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  const name = useSelector(state => state.auth.name);
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
          <Link to="/students/managestudents">Sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
