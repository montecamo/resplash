import { renderWithProviders } from '@/testUtils';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import PhotoGrid from './index.jsx';

test('renders successfully', () => {
  renderWithProviders(<PhotoGrid />);
});
