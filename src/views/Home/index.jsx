import React from 'react';

import style from './style';

import TopBar from './TopBar';
import Header from './Header';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style['background']} />
      <div className={style.main}>
        <TopBar />
        <Header />
      </div>
    </div>
  );
};

export default Home;
