import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Like from './Like';

import style from './style.scss';

const Actions = props => (
  <div className={c([style.container, props.className])}>
    <Like />
    <span className={style.icon} />
    <span className={style.icon} />
  </div>
);

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
