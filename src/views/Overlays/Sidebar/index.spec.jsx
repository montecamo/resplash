import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Sidebar from './index';

test('renders successfully', () => {
  const { getByTestId } = renderWithProviders(<Sidebar />);
});
