
import React from 'react';
import { render } from 'react-dom';

import Router from '@/router';

const App = () => (
  <Router />
);

export default App;

render(<App />, document.getElementById('root'));
