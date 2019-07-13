import React from 'react';
import Container from '@material-ui/core/Container';
import Search from './components/search/index';
import Product from './components/product/index';
import { mockData } from './foodDatabase';
import './app-container.css';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.searchFilter.bind(this);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  searchFilter(product) {
    if (product.category && product.category.includes(this.state.search)) {
      return product;
    }
    return undefined;
  }

  render() {
    return (
      <>
        <Container maxWidth="sm">
          <header className="App-header">
            <Search onChange={this.handleChange} />
            <Container className="Container-results">
              { 
                mockData
                  .filter(this.searchFilter.bind(this))
                  .map((result, i) => (
                    <Product key={`product-${i}`} {...result} />
                  ))
              }
            </Container>  
          </header>
        </Container>
      </>
    );
  }
}