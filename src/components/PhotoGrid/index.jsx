import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import GridController from './GridController';
import Grid from './Grid';

import style from './style.scss';

const getGridModeRows = mode => {
  switch (mode) {
    case 'multi-row':
      return 3;
    case 'one-row':
      return 1;
  }
};

const PhotoGrid = props => {
  const [gridMode, setGridMode] = useState('multi-row');

  return (
    <div className={c([style['photo-grid__wrapper'], props.className])}>
      <GridController
        onChange={setGridMode}
        mode={gridMode}
        className={style['grid-controller-master']}
      />
      <Grid rows={getGridModeRows(gridMode)} />
    </div>
  );
};

PhotoGrid.propTypes = {
  className: PropTypes.string,
};

export default PhotoGrid;
