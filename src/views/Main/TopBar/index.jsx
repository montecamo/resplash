import React from 'react';
import { Route, Link } from 'react-router-dom';

import { HOME_ROUTE } from '@/constants';

import style from './style.scss';

const TopBar = () => {
  return (
    <div className={style.container}>
      <Route
        exact
        path={HOME_ROUTE}
        render={() => (
          <Link to="/" className={style.credentials}>
            Made by Montecamo
          </Link>
        )}
      />
      <div className={style['auth-actions']}>
        <Link className={style['auth-action']} to="/login">
          Login
        </Link>
        <Link className={style['auth-action']} to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
