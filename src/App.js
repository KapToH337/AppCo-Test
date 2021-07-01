import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './Main';

import './App.css';

export const App = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
      </style>

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/users">
          <h1>Hello</h1>
        </Route>
      </Switch>
    </>
  );
}
