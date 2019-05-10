import React from 'react';

import { SIDEBAR_OVERLAY } from '@/constants';

import OverlaysStore from '@/stores/overlays';

import style from './style.scss';

const Menu = () => {
  return (
    <button
      onClick={() => OverlaysStore.openOverlay(SIDEBAR_OVERLAY)}
      className={style.menu}
    />
  );
};

export default Menu;
