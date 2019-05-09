import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const UserNavBar = props => {
  const [selected] = useState(props.initialSelected);

  return (
    <div className={c([style['user-navbar'], props.className])}>
      <button
        className={c({
          [style['navbar-item']]: true,
          [style.selected]: selected === 0,
        })}
      >
        Photos
      </button>
      <button
        className={c({
          [style['navbar-item']]: true,
          [style.selected]: selected === 1,
        })}
      >
        Liked
      </button>
      <button
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
