import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const Photo = props => (
  <img
    style={props.style}
    className={c([style.photo, props.className])}
    src={props.src}
  />
);

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Photo;
