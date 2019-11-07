import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
      />
      <Route
        path="/enrollments/Registerenrollments"
        component={RegisterEnrollments}
      />
      <Route path="/helporders" component={HelpOrders} />
      <Route path="/plans/manageplans" component={ManagePlans} />
      <Route path="/plans/registerplans" component={RegisterPlans} />
      <Route path="/students/managestudents" component={ManageStudents} />
      <Route path="/students/registerstudents" component={RegisterStudents} />
    </Switch>
  );
}
