module.exports = {
  Query: {
    photos: (root, args, { dataSources }) => dataSources.photosAPI.getPhotos(),
  },
  Photo: {
    id: ({ id }) => id,
    urls: ({ urls }) => ({
      regular: urls.regular,
    }),
  },
};
