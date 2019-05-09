import React from 'react';

import PhotoGrid from '@/components/PhotoGrid';

import TopBar from './TopBar';
import Header from './Header';

import style from './style.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style['background']} />
      <div className={style.main}>
        <TopBar />
        <Header />
        <PhotoGrid className={style['photo-grid-master']} />
      </div>
    </div>
  );
};

export default Home;
