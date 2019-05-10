import React from 'react';
import { observer } from 'mobx-react';

import { SIDEBAR_OVERLAY } from '@/constants';

import Sidebar from './Sidebar';

const Overlays = observer(({ overlaysStore, overlaysResolver }) => (
  <>
    {overlaysStore.overlays.map(overlay => {
      const Overlay = overlaysResolver[overlay.id];

      return (
        <Overlay
          key={overlay.id}
          close={() => overlaysStore.closeOverlay(overlay.id)}
        />
      );
    })}
  </>
));

Overlays.defaultProps = {
  overlaysResolver: { [SIDEBAR_OVERLAY]: Sidebar },
};

export default Overlays;
