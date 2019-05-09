import { toHaveClass } from 'jest-dom';
import { render, fireEvent } from 'react-testing-library';

import React from 'react';

import UserNavBar from './index.jsx';

expect.extend(toHaveClass);

test('sets initial selected correctly', () => {
  const { getByText } = render(<UserNavBar initialSelected={1} />);

  const LikedButton = getByText(/liked/i);
  expect(LikedButton).toHaveClass('selected');
});

test('change selected on item click', () => {
  const { getByText } = render(<UserNavBar />);

  const LikedButton = getByText(/liked/i);
  expect(LikedButton).not.toHaveClass('selected');

  fireEvent.click(LikedButton);
  expect(LikedButton).toHaveClass('selected');
});
