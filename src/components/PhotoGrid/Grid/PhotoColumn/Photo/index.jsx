import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Preview from './Preview';

import style from './style.scss';

const Photo = props => {
  const [hovered, hover] = useState(false);

  const onHover = () => hover(true);
  const onHoverLost = () => hover(false);

  return (
    <div
      style={props.style}
      className={c(style.container, props.className, {
        [style.hovered]: hovered,
      })}
      onMouseOver={onHover}
      onMouseLeave={onHoverLost}
    >
      <div className={style.photo_wrapper}>
        <img className={c(style.photo)} src={props.src} />
        {hovered && <Preview className={style.preview} />}
      </div>
    </div>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Photo;
