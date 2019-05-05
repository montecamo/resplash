import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PhotoColumn from './PhotoColumn';
import GridController from './GridController';

import style from './style';

const PhotoGrid = props => (
  <div className={classNames([style['photo-grid__wrapper'], props.className])}>
    <GridController className={style['grid-controller']} />
    <div className={style['photo-grid']}>
      {props.photos.map((photos, i) => (
        <PhotoColumn key={i} photos={photos} />
      ))}
    </div>
  </div>
);

PhotoGrid.propTypes = {
  photos: PropTypes.array,
  className: PropTypes.string,
};

PhotoGrid.defaultProps = {
  photos: [
    [
      'https://images.unsplash.com/photo-1556822043-c8422d0fd20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80',
      'https://images.unsplash.com/photo-1556764420-028655a23f0c?ixlib=rb-1.2.1&ixid=eyhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1538184328287-787934e67b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=679&q=80',
      'https://images.unsplash.com/photo-1556711240-9d578614d08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    ],
    [
      'https://images.unsplash.com/photo-1556732808-93585507ed1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1556724600-78e84788fca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1556741495-4a9f3c6935e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
    ],
  ],
};

export default PhotoGrid;
