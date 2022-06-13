import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './pages/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ onSignin, history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <Signin onSignin={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
