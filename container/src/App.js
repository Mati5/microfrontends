import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import DashboardApp from './components/DashboardApp';
import TodosApp from './components/TodosApp';
import AuthApp from './components/AuthApp';


import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isAuth, setIsAuth] = useState(false);

  const onSigninHandler = () => {
    setIsAuth(true);
  }

  const onSignOutHandler = () => {
    console.log('signout');
    setIsAuth(false);
  }

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isAuth} onSignOut={onSignOutHandler} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/signin">
              <AuthApp onSignin={onSigninHandler} />
            </Route>
            {isAuth && <Route path="/todos" component={TodosApp} />}
            <Route path="/" component={DashboardApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
