import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import * as overlays from './overlays';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000',
  typeDefs: [overlays.typeDefs],
  resolvers: [overlays.resolvers],
});

cache.writeData({
  data: {
    overlays: overlays.state,
  },
});

export default client;
