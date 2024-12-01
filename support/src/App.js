import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SupportDashboard from './components/SupportDashboard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'su',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/support" component={SupportDashboard} />
            <Route path="*">
              <Redirect to="/support" />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};