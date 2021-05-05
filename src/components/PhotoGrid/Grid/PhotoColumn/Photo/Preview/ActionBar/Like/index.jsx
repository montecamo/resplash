import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const Like = props => (
  <div className={c([style.container, props.className])}>
    <div className={style.icon} />
    <span className={style.count}>887</span>
  </div>
);

Like.propTypes = {
  className: PropTypes.string,
};

export default Like;
