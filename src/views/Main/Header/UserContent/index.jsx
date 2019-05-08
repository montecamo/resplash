import React from 'react';

import style from './style';

import Logo from '@/components/Logo';

const HomeContent = () => {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
};

export default HomeContent;
