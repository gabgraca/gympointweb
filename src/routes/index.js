import React from 'react';
import { Switch } from 'react-router-dom';

// O objeto Route aqui não é diretamente do
// react-router-dom pois estamos tratando
// o parâmetro isPrivate (Rotas que o usuário deve estar
// logado para acessar)
import Route from './Route';

import SignIn from '../pages/SignIn';
import ManageEnrollments from '../pages/Enrollments/ManageEnrollments';
import RegisterEnrollments from '../pages/Enrollments/RegisterEnrollments';
import HelpOrders from '../pages/HelpOrders';
import ManagePlans from '../pages/Plans/ManagePlans';
import RegisterPlans from '../pages/Plans/RegisterPlans';
import ManageStudents from '../pages/Students/ManageStudents';
import RegisterStudents from '../pages/Students/RegisterStudents';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/enrollments/manageenrollments"
        component={ManageEnrollments}
        isPrivate
      />
      <Route
        path="/enrollments/Registerenrollments"
        component={RegisterEnrollments}
        isPrivate
      />
      <Route path="/helporders" component={HelpOrders} isPrivate />
      <Route path="/plans/manageplans" component={ManagePlans} isPrivate />
      <Route path="/plans/registerplans" component={RegisterPlans} isPrivate />
      <Route
        path="/students/managestudents"
        component={ManageStudents}
        isPrivate
      />
      <Route
        path="/students/registerstudents"
        component={RegisterStudents}
        isPrivate
      />
    </Switch>
  );
}
