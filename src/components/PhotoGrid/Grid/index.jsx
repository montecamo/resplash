import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { sortPhotos } from '@/utils';
import { PHOTO_GRID_PADDING } from 'constants/ui';

import PhotoColumn from './PhotoColumn';

import usePagination from 'hooks/usePagination';

import style from './style.scss';

const getColumnWidth = rows => `${+(100 / rows).toFixed(2)}%`;

const Grid = props => {
  const [page, setPage] = useState(1);

  usePagination(() => {
    setPage(page + 1);
  });

  useEffect(() => {
    props.loadPage(page);
  }, [page]);

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
  loadPage: PropTypes.func,
};

const GET_PHOTOS = gql`
  query GetPhotos($page: Int) {
    photos(page: $page) {
      id
      height
      width
      urls {
        regular
      }
    }
  }
`;

const WrappedGrid = graphql(GET_PHOTOS, {
  options: {
    variables: { page: 1 },
  },
  props: props => {
    const { photos = [], fetchMore, variables } = props.data;

    return {
      photoColumns: sortPhotos(photos, {
        columns: props.ownProps.rows,
        padding: PHOTO_GRID_PADDING,
      }),
      loadPage: page => {
        if (page === variables.page) return;

        fetchMore({
          variables: { page },
          updateQuery: (prev, { fetchMoreResult, variables }) => {
            if (!fetchMoreResult) return prev;

            return Object.assign({}, prev, {
              photos: [...prev.photos, ...fetchMoreResult.photos],
            });
          },
        });
      },
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
