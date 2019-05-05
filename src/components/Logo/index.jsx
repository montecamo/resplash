import React from 'react';

import style from './style';

import LogoIcon from '@/assets/logo.svg';

const Logo = () => (
  <div className={style['logo-container']}>
    <LogoIcon className={style.logo} />
    <span className={style['logo-title']}>unsplash</span>
  </div>
);

export default Logo;
