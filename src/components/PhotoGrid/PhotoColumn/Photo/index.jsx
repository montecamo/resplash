import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style';

const Photo = props => (
  <img className={classNames([style.photo, props.className])} src={props.src} />
);

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Photo;
