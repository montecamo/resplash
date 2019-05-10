import { renderWithProviders } from '@/testUtils';
import { render } from 'react-testing-library';

import { ApolloProvider } from 'react-apollo';
import client, { cache } from '@/apollo';

import React from 'react';

import Overlays from './index';

test('renders successfully', () => {
  renderWithProviders(<Overlays />);
});

test('resolves component by id correctly', () => {
  const testId = 'mocked-div';
  const overlayId = 'mockedOverlay';

  cache.writeData({
    data: {
      overlays: [{ id: overlayId, __typename: 'Overlay' }],
    },
  });

  const ComponentMock = () => <div data-testid={testId} />;

  const overlaysResolver = { [overlayId]: ComponentMock };
  const { queryByTestId } = render(
    <ApolloProvider client={client}>
      <Overlays overlaysResolver={overlaysResolver} />
    </ApolloProvider>,
  );

  expect(queryByTestId(testId)).toBeTruthy();
});
