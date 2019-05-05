import { render } from 'react-testing-library';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import HomeContent from './index.jsx';

test('renders successfully', () => {
  render(<HomeContent />);
});
