import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME_ROUTE, USER_ROUTE } from '@/constants';

import Menu from './Menu';
import Search from './Search';
import HomeContent from './HomeContent';
import UserContent from './UserContent';

import style from './style.scss';

const Header = () => {
  return (
    <div className={style.container}>
      <Menu />
      <Switch>
        <Route path={USER_ROUTE} component={UserContent} />
        <Route path={HOME_ROUTE} component={HomeContent} />
      </Switch>
      <Search />
    </div>
  );
};

export default Header;
