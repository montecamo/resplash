import React from 'react';
import PropTypes from 'prop-types';

import { PHOTO_GRID_PADDING } from 'constants/ui';

import style from './style.scss';

import Photo from './Photo';

const PhotoColumn = props => (
  <div style={{ width: props.width }} className={style['photo-column']}>
    {props.photos.map(photo => (
      <Photo
        className={style.photo}
        style={{
          paddingBottom: PHOTO_GRID_PADDING,
        }}
        key={photo.id}
        src={photo.urls.regular}
      />
    ))}
  </div>
);

PhotoColumn.propTypes = {
  photos: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhotoColumn.defaultProps = {
  photos: [],
  width: 'auto',
};

export default PhotoColumn;
