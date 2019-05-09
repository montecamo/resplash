import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style';

const UserNavBar = props => {
  return (
    <div className={c([style['user-navbar'], props.className])}>
      <div className={c([style['navbar-item'], style.selected])}>Photos</div>
      <div className={style['navbar-item']}>Liked</div>
      <div className={style['navbar-item']}>Collections</div>
    </div>
  );
};

UserNavBar.propTypes = {
  className: PropTypes.string,
};

export default UserNavBar;
