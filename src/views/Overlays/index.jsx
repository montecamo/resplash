import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Mutation } from 'react-apollo';

import { CLOSE_OVERLAY, GET_OVERLAYS } from '@/apollo/overlays/queries';

import { SIDEBAR_OVERLAY } from '@/constants';

import Sidebar from './Sidebar';

const Overlays = ({ overlays = [], overlaysResolver }) => (
  <Mutation mutation={CLOSE_OVERLAY}>
    {closeOverlay => (
      <>
        {overlays.map(overlay => {
          const Overlay = overlaysResolver[overlay.id];

          return (
            <Overlay
              key={overlay.id}
              close={() => closeOverlay({ variables: { id: overlay.id } })}
            />
          );
        })}
      </>
    )}
  </Mutation>
);

Overlays.propTypes = {
  overlays: PropTypes.array,
  overlaysResolver: PropTypes.object,
};

Overlays.defaultProps = {
  overlaysResolver: { [SIDEBAR_OVERLAY]: Sidebar },
};

export default graphql(GET_OVERLAYS, {
  props: props => ({ overlays: props.data.overlays }),
})(Overlays);
