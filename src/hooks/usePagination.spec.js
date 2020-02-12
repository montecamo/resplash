import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from './usePagination';

test('should increment counter', () => {
  const cb = jest.fn(() => null);

  const { result } = renderHook(() =>
    usePagination(cb, {
      threshold: 0,
      elem: window,
    }),
  );

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
