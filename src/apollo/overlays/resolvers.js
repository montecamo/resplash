import { GET_OVERLAYS } from './queries';

export default {
  Mutation: {
    openOverlay: (_, { id }, { cache }) => {
      const { overlays } = cache.readQuery({ query: GET_OVERLAYS });

      const newOverlay = { id, __typename: 'Overlay' };

      const data = {
        overlays: [...overlays, newOverlay],
      };

      cache.writeQuery({ query: GET_OVERLAYS, data });

      return newOverlay;
    },

    closeOverlay: (_, { id }, { cache }) => {
      const { overlays } = cache.readQuery({ query: GET_OVERLAYS });

      const data = {
        overlays: overlays.filter(overlay => overlay.id !== id),
      };

      cache.writeQuery({ query: GET_OVERLAYS, data });

      return data.overlays;
    },
  },
};
