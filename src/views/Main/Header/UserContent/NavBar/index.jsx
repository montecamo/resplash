import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

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
