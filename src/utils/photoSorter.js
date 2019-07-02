const getMinColumn = heights => {
  const minHeight = Math.min(...heights);

  return heights.findIndex(len => len === minHeight);
};

export const sortPhotos = (photos, number = 3) => {
  photos = photos.slice(0, 9);
  console.warn(photos);
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
    heights[minColumn] += photo.height;
    console.warn(heights, minColumn);
  });

  return columns;
};
