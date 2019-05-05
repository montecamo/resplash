import React from 'react';
import { Link } from 'react-router-dom';

import style from './style';

import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.content} />
      <Search />
    </div>
  );
};

export default Header;
