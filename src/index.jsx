import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import '@/styles';

import Router from '@/router';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;

render(<App />, document.getElementById('root'));
