const getMinColumn = heights => {
  const minHeight = Math.min(...heights);

  return heights.findIndex(len => len === minHeight);
};

const scalePhotoToFit = width => photo => ({
  width,
  height: (photo.height * width) / photo.width,
});

const FIT_WIDTH = 1000;

export const sortPhotos = (photos, number = 3) => {
  const scale = scalePhotoToFit(FIT_WIDTH);
  const columns = [];
  const heights = [];
  let currentIndex;

  photos.forEach((photo, i) => {
    currentIndex = i % number;

    if (!columns[currentIndex]) {
      columns[currentIndex] = [];
      heights[currentIndex] = 0;
    }

    const minColumn = getMinColumn(heights);
    columns[minColumn].push(photo);
    heights[minColumn] += scale(photo).height;
  });

  return columns;
};
