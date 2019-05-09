import 'react-testing-library/cleanup-after-each';
import { renderWithProviders } from '@/testUtils';

import React from 'react';

import Header from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<Header />);
});
