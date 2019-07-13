import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';

import Search from './components/search/index';
import Product from './components/product/index';

function App() {
  const results = [
    {
      product: 'Pasta',
      rating: 1
    },
    {
      product: 'Meat',
      rating: 1
    }
  ];

  return (
    <div className="App">
      <Container maxWidth="sm">
        <header className="App-header">
          <Search />
          {results.map(result => <Product {...result} />)}
        </header>
      </Container>
    </div>
  );
}

export default App;
