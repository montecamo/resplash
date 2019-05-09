import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import GridController from './GridController';
import Grid from './Grid';

import style from './style.scss';

const PhotoGrid = props => (
  <div className={c([style['photo-grid__wrapper'], props.className])}>
    <GridController className={style['grid-controller']} />
    <Grid />
  </div>
);

PhotoGrid.propTypes = {
  className: PropTypes.string,
};

export default PhotoGrid;
