import { renderWithProviders } from '@/testUtils';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import Main from './index';

test('renders successfully', () => {
  renderWithProviders(<Main />);
});
