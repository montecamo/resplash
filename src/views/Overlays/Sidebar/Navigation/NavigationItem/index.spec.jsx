import { renderWithProviders } from '@/testUtils';

import React from 'react';

import NavigationItem from './index';

test('renders successfully', () => {
  renderWithProviders(<NavigationItem title="test" link="test" />);
});
