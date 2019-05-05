import React from 'react';

import style from './style';

import Menu from './Menu';
import Search from './Search';
import HomeContent from './HomeContent';

const Header = () => {
  return (
    <div className={style.container}>
      <Menu />
      <HomeContent />
      <Search />
    </div>
  );
};

export default Header;
