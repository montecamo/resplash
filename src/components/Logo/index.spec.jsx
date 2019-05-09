import { render } from 'react-testing-library';

import React from 'react';

import Logo from './index.jsx';

test('renders successfully', () => {
  render(<Logo />);
});
