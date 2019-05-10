import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import style from './style.scss';

const Avatar = ({ src, className }) => (
  <div className={c([style['avatar-container'], className])}>
    <img className={style.avatar} src={src} />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  src: '',
};

export default Avatar;
