import { renderWithProviders } from '@/testUtils';

import React from 'react';

import PhotoGrid from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<PhotoGrid />);
});
