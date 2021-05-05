import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import ActionBar from './ActionBar';
import PhotoCredentials from 'components/PhotoCredentials';

import style from './style.scss';

const Preview = props => (
  <div className={c([style.container, props.className])} style={props.style}>
    <PhotoCredentials className={style.credentials} />
    {/*<ActionBar className={style.action_bar} />*/}
  </div>
);

Preview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Preview;
