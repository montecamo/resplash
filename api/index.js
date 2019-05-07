const { ApolloServer } = require('apollo-server');

const Photos = require('./Photos');

const UNSPLASH_API = 'https://api.unsplash.com';

const server = new ApolloServer({
  typeDefs: Photos.types,
  resolvers: {
    ...Photos.resolvers,
  },
  dataSources: () => ({
    photosAPI: new Photos.API(UNSPLASH_API),
  }),
  context: () => ({
    accessKey:
      '64ec94d35d12984165ecf6db82008c6e153e7a38674475fdfca08d434d69d48e',
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
