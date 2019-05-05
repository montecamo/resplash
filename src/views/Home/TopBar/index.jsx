import React from 'react';
import { Link } from 'react-router-dom';

import style from './style';

const TopBar = () => {
  return (
    <div className={style.container}>
      <h3 className={style.credentials}>Made by Montecamo</h3>
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
