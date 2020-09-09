import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Financy from './pages/Finances/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Financy} />
      </Switch>
    </BrowserRouter>
  );
}
