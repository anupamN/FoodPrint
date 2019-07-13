import React from 'react';
import Container from '@material-ui/core/Container';
import Search from './components/search/index';
import Product from './components/product/index';
import { results } from './consts';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  searchFilter(product) {
    return product;
  }

  render() {
    return (
      <Container maxWidth="sm">
        <header className="App-header">
          <Search onChange={this.handleChange} />
          <Container>
            { 
              results
                .filter(this.searchFilter)
                .map((result, i) => (
                  <Product key={`product-${i}`} {...result} />
                ))
            }
          </Container>  
        </header>
      </Container>
    );
  }
}