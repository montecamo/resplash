import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Overlays from './index';
import OverlaysStore from '@/stores/overlays';

test('resolves component by id correctly', () => {
  const testId = 'mocked-div';
  const ComponentMock = () => <div data-testid={testId} />;
  const overlaysResolver = { mockedOverlay: ComponentMock };
  const { queryByTestId } = renderWithProviders(
    <Overlays
      overlaysStore={OverlaysStore}
      overlaysResolver={overlaysResolver}
    />,
  );

  OverlaysStore.openOverlay('mockedOverlay');
  expect(queryByTestId(testId)).toBeTruthy();
  OverlaysStore.closeOverlay('mockedOverlay');
  expect(queryByTestId(testId)).toBeFalsy();
});
