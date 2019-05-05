import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Photo from './Photo';

const PhotoColumn = props => (
  <div className={style['photo-column']}>
    {props.photos.map(src => (
      <Photo className={style.photo} key={src} src={src} />
    ))}
  </div>
);

PhotoColumn.propTypes = {
  photos: PropTypes.array,
};

PhotoColumn.defaultProps = {
  photos: [],
};

export default PhotoColumn;
