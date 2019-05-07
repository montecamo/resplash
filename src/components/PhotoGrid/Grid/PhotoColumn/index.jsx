import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Photo from './Photo';

const PhotoColumn = props => (
  <div className={style['photo-column']}>
    {props.photos.map(photo => (
      <Photo className={style.photo} key={photo.id} src={photo.urls.regular} />
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
