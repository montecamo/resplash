import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem';

import style from './style.scss';

const Navigation = ({ title, items, className }) => {
  return (
    <div className={c([style['navigation-container'], className])}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.items}>
        {items.map(item => (
          <NavigationItem key={item.link} {...item} />
        ))}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      exact: PropTypes.bool,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default Navigation;
