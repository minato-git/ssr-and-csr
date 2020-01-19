import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import wizards from './wizards.jpg';
import { Carousel } from '../components/carousel';
import { ProdList } from '../components/prodList';
import { Constants } from '../constants';

import './index.css';

class Home extends Component {
  state = {
    products: Constants.products
  };

  onLoadMore = () => {
    this.setState({ products: this.state.products.concat(Constants.products) });
  };
  render() {
    return (
      <div className="home">
        <Carousel imgs={Constants.imgUrls} />
        <ProdList products={this.state.products} onLoadMore={this.onLoadMore} />
      </div>
    );
  }
}

export default Home;
