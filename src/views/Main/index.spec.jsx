import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Main from './index';

test('renders successfully', () => {
  renderWithProviders(<Main />);
});
