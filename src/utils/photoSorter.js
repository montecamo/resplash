export const sortPhotos = (photos, number = 3) => {
  const grouped = [];
  let index;

  photos.forEach((photo, i) => {
    index = i % number;

    if (!grouped[index]) {
      grouped[index] = [];
    }

    grouped[index].push(photo);
  });

  return grouped;
};
