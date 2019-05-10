import React from 'react';
import { Mutation } from 'react-apollo';

import { SIDEBAR_OVERLAY } from '@/constants';
import { OPEN_OVERLAY } from '@/apollo/overlays/queries';

import style from './style.scss';

const Menu = () => {
  return (
    <Mutation mutation={OPEN_OVERLAY}>
      {openOverlay => (
        <button
          onClick={() => openOverlay({ variables: { id: SIDEBAR_OVERLAY } })}
          className={style.menu}
        />
      )}
    </Mutation>
  );
};

export default Menu;
