import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import style from './style.scss';

const GridController = ({ onChange, mode, className }) => (
  <div className={c([style['grid-controller'], className])}>
    <div
      onClick={() => onChange('one-row')}
      data-testid="one-row-grid"
      className={c({
        [style['grid-controller__item']]: true,
        [style['selected']]: mode === 'one-row',
      })}
    />
    <div
      onClick={() => onChange('multi-row')}
      data-testid="multi-row-grid"
      className={c({
        [style['grid-controller__item']]: true,
        [style['selected']]: mode === 'multi-row',
      })}
    />
  </div>
);

GridController.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['one-row', 'multi-row']),
};

GridController.defaultProps = {
  mode: 'multi-row',
};

export default GridController;
