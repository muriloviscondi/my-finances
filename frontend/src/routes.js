import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Finances/index';
import Create from './pages/Create/index';
import Update from './pages/Edit/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}
