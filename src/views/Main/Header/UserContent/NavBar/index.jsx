import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Underline from './Underline';

import style from './style.scss';

const NAVBAR_ITEM_WIDTH = 140;

const navbarItems = ['Photos', 'Liked', 'Collections'];

const UserNavBar = props => {
  const [selected, selectItem] = useState(props.initialSelected);

  return (
    <div className={c([style['user-navbar'], props.className])}>
      {navbarItems.map((itemName, i) => (
        <button
          key={i}
          onClick={() => selectItem(i)}
          className={c({
            [style['navbar-item']]: true,
            [style.selected]: selected === i,
          })}
        >
          {itemName}
        </button>
      ))}
      <Underline
        className={style['navbar-underline-master']}
        itemWidth={NAVBAR_ITEM_WIDTH}
        selectedItem={selected}
      />
    </div>
  );
};

UserNavBar.propTypes = {
  className: PropTypes.string,
  initialSelected: PropTypes.number,
};

UserNavBar.defaultProps = {
  initialSelected: 0,
};

export default UserNavBar;
