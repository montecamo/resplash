import { render } from 'react-testing-library';

import 'react-testing-library/cleanup-after-each';

import React from 'react';

import Main from './index.jsx.js';

test('renders successfully', () => {
  render(<Main />);
});
