import React from 'react';
import { render } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithProviders = (
  ui,
  {
    mocks = [],
    addTypename = false,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      <Router history={history}>{ui}</Router>
    </MockedProvider>,
  ),
  // adding `history` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  history,
});

export default renderWithProviders;
