import isNull from 'lodash/isNull';

import { useEffect, useState } from 'react';

const widthGetter = elem => {
  if (isNull(elem)) return null;

  return elem.clientWidth;
};

export default (elem = window, options = {}) => {
  const { getWidth = widthGetter } = options;

  const [width, updateWidth] = useState(getWidth(elem));

  useEffect(() => {
    updateWidth(getWidth(elem));
    const onResize = () => updateWidth(getWidth(elem));

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [elem]);

  return width;
};
