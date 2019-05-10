import { renderWithProviders } from '@/testUtils';

import React from 'react';

import UserProfile from './index';

test('renders successfully', () => {
  renderWithProviders(<UserProfile />);
});
