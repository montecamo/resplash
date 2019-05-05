import React from 'react';

import style from './style';

import TopBar from './TopBar';

const Home = () => {
  return (
    <div>
      <div className={style['background']} />
      <div className={style.main}>
        <TopBar />
      </div>
    </div>
  );
};

export default Home;
