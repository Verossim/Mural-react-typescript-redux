import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/register" exact component={Register} />
  </Switch>
);

export default Routes;
