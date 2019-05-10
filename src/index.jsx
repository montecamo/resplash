import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import '@/styles';

import Router from '@/router';
import client from '@/apollo';

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;

render(<App />, document.getElementById('root'));
