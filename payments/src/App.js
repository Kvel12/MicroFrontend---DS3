import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import PaymentDashboard from './components/PaymentDashboard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pa',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/payments" component={PaymentDashboard} />
            <Route path="*">
              <Redirect to="/payments" />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};