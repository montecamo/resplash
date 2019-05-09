import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const NavBarUnderline = ({ className, selectedItem, itemWidth }) => (
  <div
    style={{ left: itemWidth * selectedItem }}
    className={c([style['navbar-underline-container'], className])}
  >
    <div className={style['navbar-underline']} />
  </div>
);

NavBarUnderline.propTypes = {
  className: PropTypes.string,
  itemWidth: PropTypes.number.isRequired,
  selectedItem: PropTypes.number.isRequired,
};

export default NavBarUnderline;
