import { render } from 'react-testing-library';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import UserContent from './index.jsx';

test('renders successfully', () => {
  render(<UserContent />);
});
