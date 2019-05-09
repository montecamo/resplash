import { renderWithProviders } from '@/testUtils';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import TopBar from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<TopBar />);
});
