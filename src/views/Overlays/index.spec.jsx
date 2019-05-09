import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Overlays from './index';
import OverlaysStore from '@/stores/overlays';

const Store = new OverlaysStore();

test('resolves component by id correctly', () => {
  const testId = 'mocked-div';
  const ComponentMock = () => <div data-testid={testId} />;
  const overlaysResolver = { mockedOverlay: ComponentMock };
  const { queryByTestId } = renderWithProviders(
    <Overlays overlaysStore={Store} overlaysResolver={overlaysResolver} />,
  );

  Store.openOverlay('mockedOverlay');
  expect(queryByTestId(testId)).toBeTruthy();
  Store.closeOverlay('mockedOverlay');
  expect(queryByTestId(testId)).toBeFalsy();
});
