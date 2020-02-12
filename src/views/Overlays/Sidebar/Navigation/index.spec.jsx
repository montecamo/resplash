import React from 'react';

import { NavLink as MockedNavLink } from 'react-router-dom';
import { render } from 'react-testing-library';

import Navigation from './index';

jest.mock('react-router-dom', () => ({
  NavLink: jest.fn(({ children }) => children),
}));

afterEach(() => {
  MockedNavLink.mockClear();
});

test('renders successfully', () => {
  render(<Navigation title="test" items={[]} />);
});

test('renders title and NavLinks from passed props', () => {
  const fakeLinks = [
    { title: 'TestLink', link: 'https://test.link', exact: true },
    { title: 'TestLink2', link: 'https://test.link2', exact: false },
  ];

  const { getByText } = render(
    <Navigation title="TestTitle" items={fakeLinks} />,
  );

  expect(getByText(/testtitle/i)).toBeTruthy();

  expect(MockedNavLink).toHaveBeenCalledTimes(2);
  expect(MockedNavLink).toHaveBeenNthCalledWith(
    1,
    expect.objectContaining({
      to: fakeLinks[0].link,
      exact: true,
    }),
    {},
  );

  expect(MockedNavLink).toHaveBeenNthCalledWith(
    2,
    expect.objectContaining({
      to: fakeLinks[1].link,
      exact: false,
    }),
    {},
  );
});
