import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const Photo = props => (
  <img className={c([style.photo, props.className])} src={props.src} />
);

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Photo;
