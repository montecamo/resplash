const getMinColumn = heights => {
  const minHeight = Math.min(...heights);

  return heights.findIndex(len => len === minHeight);
};

const scalePhotoToFit = width => photo => ({
  width,
  height: (photo.height * width) / photo.width,
});

const FIT_WIDTH = 1000;

export const sortPhotos = (photos, options = {}) => {
  const { columns = 1, padding = 0 } = options;

  const scale = scalePhotoToFit(FIT_WIDTH);
  const result = [];
  const heights = [];
  let currentIndex;

  photos.forEach((photo, i) => {
    currentIndex = i % columns;

    if (!result[currentIndex]) {
      result[currentIndex] = [];
      heights[currentIndex] = 0;
    }

    const minColumn = getMinColumn(heights);
    result[minColumn].push(photo);
    heights[minColumn] += scale(photo).height;
    heights[minColumn] += padding;
  });

  return result;
};
