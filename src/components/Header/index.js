import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
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
          <strong>Gabriel Graça</strong>
          <Link to="/students/managestudents">Sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
