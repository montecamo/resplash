import { action, observable } from 'mobx';

class Overlays {
  @observable overlays = [];

  @action openOverlay = (overlayId, options) => {
    this.overlays.push({ id: overlayId, ...options });
  };

  @action closeOverlay = overlayId => {
    this.overlays = this.overlays.filter(overlay => overlay.id !== overlayId);
  };
}

const OverlaysStore = new Overlays();

export default OverlaysStore;
