import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style';

const GridController = props => (
  <div className={classNames([style['grid-controller'], props.className])}>
    <div className={style['grid-controller__item']} />
    <div className={style['grid-controller__item']} />
  </div>
);

GridController.propTypes = {
  className: PropTypes.string,
};

export default GridController;
