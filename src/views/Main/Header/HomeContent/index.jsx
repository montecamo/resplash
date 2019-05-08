import React from 'react';

import style from './style';

import Logo from '@/components/Logo';

const HomeContent = () => {
  return (
    <div className={style.header}>
      <Logo />
      <p className={style['header-slogan']}>
        Free high-resolution photos every 10 days
      </p>
      <button className={style['header-subscribe']}>Subscribe</button>
    </div>
  );
};

export default HomeContent;
