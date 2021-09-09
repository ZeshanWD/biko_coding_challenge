import React, { Component } from 'react';

import Header from '../components/Header';
import ProductListContainer from '../components/ProductListContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductListContainer />
      </div>
    );
  }
}

export default Home;
