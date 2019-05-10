import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import style from './style.scss';

const NavigationItem = ({ exact, title, link }) => {
  return (
    <NavLink
      exact={exact}
      className={style['navigation-item']}
      to={link}
      activeClassName={style.selected}
    >
      {title}
    </NavLink>
  );
};

NavigationItem.propTypes = {
  exact: PropTypes.bool,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

NavigationItem.defaultProps = {
  exact: false,
};

export default NavigationItem;
