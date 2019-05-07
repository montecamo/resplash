import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { sortPhotos } from '@/utils';
import PhotoColumn from './PhotoColumn';

import style from './style';

const Grid = props => {
  return (
    <div className={style['photo-grid']}>
      {props.photos.map((photos, i) => (
        <PhotoColumn key={i} photos={photos} />
      ))}
    </div>
  );
};

Grid.propTypes = {
  photos: PropTypes.array,
  className: PropTypes.string,
};

const GET_PHOTOS = gql`
  {
    photos {
      id
      urls {
        regular
      }
    }
  }
`;

const WrappedGrid = graphql(GET_PHOTOS, {
  props: props => {
    const { photos = [] } = props.data;

    return {
      photos: sortPhotos(photos, props.ownProps.rows),
    };
  },
})(Grid);

WrappedGrid.propTypes = {
  rows: PropTypes.number,
};

WrappedGrid.defaultProps = {
  rows: 3,
};

export default WrappedGrid;
