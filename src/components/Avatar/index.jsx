import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const Avatar = ({ src }) => (
  <div className={style['avatar-container']}>
    <img className={style.avatar} src={src} />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: '',
};

export default Avatar;
