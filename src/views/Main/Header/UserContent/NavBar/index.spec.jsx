import { toHaveClass } from 'jest-dom';
import { render } from 'react-testing-library';

import React from 'react';

import UserNavBar from './index.jsx';

expect.extend(toHaveClass);

test('set initial selected correctly', () => {
  const { getByText } = render(<UserNavBar initialSelected={1} />);

  const LikedButton = getByText(/liked/i);
  expect(LikedButton).toHaveClass('selected');
});
