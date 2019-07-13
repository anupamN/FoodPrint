import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';

import Search from './components/search/index';
import Product from './components/product/index';
import { results } from './consts';

function App() {

  return (
    <div className="App">
      <Container maxWidth="sm">
        <header className="App-header">
          <Search />
          <Container>
            {results.map(result => <Product {...result} />)}
          </Container>
        </header>
      </Container>
    </div>
  );
}

export default App;
