import { useEffect } from 'react';

const scrollTopGetter = e => e.target.documentElement.scrollTop;
const scrollHeightGetter = e => e.target.documentElement.scrollHeight;
const elemHeightGetter = elem => elem.innerHeight;

export default (cb, options = {}) => {
  const {
    elem = window,
    threshold = 0,
    getScrollTop = scrollTopGetter,
    getScrollHeight = scrollHeightGetter,
  } = options;

  useEffect(() => {
    const onScroll = e => {
      if (
        getScrollHeight(e) - getScrollTop(e) - elemHeightGetter(elem) <=
        threshold
      ) {
        cb();
      }
    };

    elem.addEventListener('scroll', onScroll);

    return () => {
      elem.removeEventListener('scroll', onScroll);
    };
  }, [elem, threshold, cb]);
};
