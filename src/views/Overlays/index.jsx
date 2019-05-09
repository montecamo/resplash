import React from 'react';
import { observer } from 'mobx-react';

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
  overlaysResolver: {},
};

export default Overlays;
