import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import ProjectDashboard from './components/ProjectDashboard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pr',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/projects" component={ProjectDashboard} />
            <Route path="*">
              <Redirect to="/projects" />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};