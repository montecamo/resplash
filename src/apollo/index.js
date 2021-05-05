import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import * as overlays from './overlays';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'https://resplash.montecamo.dev/api',
  typeDefs: [overlays.typeDefs],
  resolvers: [overlays.resolvers],
});

cache.writeData({
  data: {
    overlays: overlays.state,
  },
});

export default client;
