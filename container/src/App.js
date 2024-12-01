import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const AuthApp = React.lazy(() => import('auth/AuthApp'));
const ProjectsApp = React.lazy(() => import('projects/ProjectsApp'));
const PaymentsApp = React.lazy(() => import('payments/PaymentsApp'));
const SupportApp = React.lazy(() => import('support/SupportApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/auth/" />
            </Route>
            <Route path="/auth" component={AuthApp} />
            <Route path="/projects" component={ProjectsApp} />
            <Route path="/payments" component={PaymentsApp} />
            <Route path="/support" component={SupportApp} />
            <Route path="*">
              <Redirect to="/auth/" />
            </Route>
          </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};