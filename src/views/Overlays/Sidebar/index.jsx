import React from 'react';

import style from './style.scss';

const Sidebar = () => {
  return (
    <div className={style['sidebar-container']}>
      <div className={style.overlay} />
      <div className={style.sidebar} />
    </div>
  );
};

export default Sidebar;
