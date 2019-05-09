import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import { HOME_ROUTE } from '@/constants';

import style from './style.scss';

const TopBar = props => {
  const [selected, selectItem] = useState();
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

TopBar.propTypes = {
  initialSelected: PropTypes.number,
};

TopBar.defaultProps = {
  initialSelected: 0,
};

export default TopBar;
