import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { HOME_ROUTE, USER_ROUTE } from '@/constants';
import Main from '@/views/Main';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={USER_ROUTE} component={Main} />
      <Route path={HOME_ROUTE} component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
