module.exports = {
  Query: {
    photos: (_, args, { dataSources }) =>
      dataSources.photosAPI.getPhotos(args.page),
  },
  Photo: {
    id: ({ id }) => id,
    urls: ({ urls }) => ({
      regular: urls.regular,
    }),
  },
};
