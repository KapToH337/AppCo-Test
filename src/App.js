import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Main';
import { Users } from './Users';
import { UserStats } from './UserStats';


import './App.scss';

export const App = () => {
  const [user, setUser] = useState([])

  const findUser = (user) => {
    setUser(user);
  }

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
      </style>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users/:page" exact>
          <Users findUser={findUser} />
        </Route>

        <Route path="/users/:page/:userId">
          <UserStats user={user} />
        </Route>

        <Redirect path="/home" to="/"></Redirect>
        <Redirect path="/users" to="/users/page-1"></Redirect>

        <h1>Page not found</h1>
      </Switch>
    </>
  );
}
