import { render, fireEvent } from 'react-testing-library';
import { toHaveClass } from 'jest-dom';

import React from 'react';

import GridController from './index.jsx';

expect.extend(toHaveClass);

test('renders successfully', () => {
  render(<GridController mode="multi-row" onChange={() => {}} />);
});

test('set correct rows mode', () => {
  const { getByTestId } = render(
    <GridController onChange={() => {}} mode="multi-row" />,
  );

  expect(getByTestId('multi-row-grid')).toHaveClass('selected');
});

test('set correct vertical mode', () => {
  const { getByTestId } = render(
    <GridController onChange={() => {}} mode="one-row" />,
  );

  expect(getByTestId('one-row-grid')).toHaveClass('selected');
});

test('calls change function with correct mode on click', () => {
  const onChangeMock = jest.fn(() => null);
  const { getByTestId } = render(
    <GridController onChange={onChangeMock} mode="multi-row" />,
  );

  const verticalModeButton = getByTestId('one-row-grid');
  fireEvent.click(verticalModeButton);

  expect(onChangeMock).toHaveBeenCalledTimes(1);

  expect(onChangeMock).toHaveBeenCalledWith('one-row');
});
