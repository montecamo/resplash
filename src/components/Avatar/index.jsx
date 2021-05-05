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
  src:
    'https://images.unsplash.com/photo-1557246519-f38ee04b918d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcwMjYwfQ',
};

export default Avatar;
