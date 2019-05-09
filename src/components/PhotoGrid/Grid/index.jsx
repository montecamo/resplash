import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { sortPhotos } from '@/utils';
import PhotoColumn from './PhotoColumn';

import style from './style.scss';

const getColumnWidth = rows => `${+(100 / rows).toFixed(2)}%`;

const Grid = props => {
  return (
    <div className={style['photo-grid']}>
      {props.photoColumns.map((photos, i) => (
        <PhotoColumn
          width={getColumnWidth(props.photoColumns.length)}
          key={i}
          photos={photos}
        />
      ))}
    </div>
  );
};

Grid.propTypes = {
  photoColumns: PropTypes.array,
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
      photoColumns: sortPhotos(photos, props.ownProps.rows),
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
