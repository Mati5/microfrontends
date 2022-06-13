import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SummaryPage from './pages/SummaryPage';
import TodosPage from './pages/TodosPage';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path={`/todos/summary`} component={SummaryPage} />
            <Route exact path={`/todos`} component={TodosPage} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
