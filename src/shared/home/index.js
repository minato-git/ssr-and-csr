import React, { Component } from 'react';
import { Carousel } from '../components/carousel';
import { ProdList } from '../components/prodList';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    let initialData;
    if (typeof window !== 'undefined') {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }
    this.state = {
      initialData,
      page: 1
    };
  }

  componentDidMount() {
    if (!this.state.initialData) {
      Promise.all(
        fetch('https://node-sample-api.herokuapp.com/api/home').then((data) => data.json()),
        fetch('https://node-sample-api.herokuapp.com/api/products?page=1').then((data) => data.json())
      ).then(([carouselData, productData]) => {
        this.setState({initialData: {carouselData, productData}});
      });
    }
  }

  onLoadMore = () => {
    let pageNo = this.state.page;
    fetch(`https://node-sample-api.herokuapp.com/api/products?page=${++pageNo}`)
      .then(data => data.json())
      .then(products => {
        this.setState({
          initialData: {
            ...this.state.initialData,
            productData: {
              data: this.state.initialData.productData.data.concat(products.data)
            }
          },
          page: pageNo
        });
      });
  };

  render() {
    console.log('home state', this.state);

    let carouselData, productData;
    if (this.state.initialData) {
      carouselData = this.state.initialData.carouselData;
      productData = this.state.initialData.productData.data;
    }
    return (
      <div className="home">
        {carouselData && <Carousel imgs={carouselData.carousel} />}
        {productData && <ProdList products={productData} onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}

export default Home;
