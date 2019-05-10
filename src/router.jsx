import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { HOME_ROUTE, USER_ROUTE } from '@/constants';

import Main from '@/views/Main';
import Overlays from '@/views/Overlays';

import OverlaysStore from '@/stores/overlays';

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path={USER_ROUTE} component={Main} />
        <Route path={HOME_ROUTE} component={Main} />
      </Switch>
      <Overlays overlaysStore={OverlaysStore} />
    </>
  </BrowserRouter>
);

export default Router;
