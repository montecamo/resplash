import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const UserNavBar = props => {
  const [selected, selectItem] = useState(props.initialSelected);

  return (
    <div className={c([style['user-navbar'], props.className])}>
      <button
        onClick={() => selectItem(0)}
        className={c({
          [style['navbar-item']]: true,
          [style.selected]: selected === 0,
        })}
      >
        Photos
      </button>
      <button
        onClick={() => selectItem(1)}
        className={c({
          [style['navbar-item']]: true,
          [style.selected]: selected === 1,
        })}
      >
        Liked
      </button>
      <button
        onClick={() => selectItem(2)}
        className={c({
          [style['navbar-item']]: true,
          [style.selected]: selected === 2,
        })}
      >
        Collections
      </button>
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
