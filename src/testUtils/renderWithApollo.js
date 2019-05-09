import React from 'react';
import { render } from 'react-testing-library';

import { MockedProvider } from 'react-apollo/test-utils';

const renderWithRouter = (ui, { mocks = [], addTypename = false } = {}) => ({
  ...render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      {ui}
    </MockedProvider>,
  ),
});

export default renderWithRouter;
