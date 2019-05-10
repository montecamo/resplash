import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Menu from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<Menu />);
});
