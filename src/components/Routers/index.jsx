import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageGame } from '../../pages';

const Routers = () => (
  <Switch>
    <Route path="/game">
      <PageGame />
    </Route>
    {/* <Route path="/simulated"></Route> */}
  </Switch>
);

export default Routers;