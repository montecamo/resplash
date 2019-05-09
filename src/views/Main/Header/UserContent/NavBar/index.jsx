import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const UserNavBar = props => {
  return (
    <div className={c([style['user-navbar'], props.className])}>
      <button className={c([style['navbar-item'], style.selected])}>
        Photos
      </button>
      <button className={style['navbar-item']}>Liked</button>
      <button className={style['navbar-item']}>Collections</button>
    </div>
  );
};

UserNavBar.propTypes = {
  className: PropTypes.string,
};

export default UserNavBar;
