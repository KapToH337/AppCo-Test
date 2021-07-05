import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Main';
import { Users } from './Users';
import { UserStats } from './UserStats';


import './App.scss';

export const App = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
      </style>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users/:page" exact component={Users} />

        <Route path="/users/:page/:userId" component={UserStats} />

        <Redirect path="/home" to="/"></Redirect>
        <Redirect path="/users" to="/users/page-1"></Redirect>

        <h1>Page not found</h1>
      </Switch>
    </>
  );
}
