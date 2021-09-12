import React, { Component } from 'react';

import Header from '../components/Header';
import ProductListContainer from '../components/Home/ProductListContainer';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductListContainer />
      </React.Fragment>
    );
  }
}

export default Home;
