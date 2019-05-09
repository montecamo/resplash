import { renderWithProviders } from '@/testUtils';

import React from 'react';

import TopBar from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<TopBar />);
});
