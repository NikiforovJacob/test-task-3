import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from '../../MainContainer/index';

const Routes = () => (
  <Switch>
    <Route path="/" component={MainContainer} />
  </Switch>
);

export default Routes;
