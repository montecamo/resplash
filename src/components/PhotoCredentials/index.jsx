import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Avatar from 'components/Avatar';

import style from './style.scss';

const PhotoCredentials = props => (
  <div
    className={c(style.container, props.className, {
      [style.horizontal]: props.horizontal,
    })}
  >
    <Avatar className={style.avatar} />
    <div className={style.credentials}>
      <span className={style.title}>Photo By</span>
      <span className={style.name}>{props.name}</span>
    </div>
  </div>
);

PhotoCredentials.propTypes = {
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  name: PropTypes.string,
};

PhotoCredentials.defaultProps = {
  name: 'Michaela Keaton',
  horizontal: false,
};

export default PhotoCredentials;
