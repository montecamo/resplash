import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Sidebar from './index';

test('renders successfully', () => {
  renderWithProviders(<Sidebar />);
});
