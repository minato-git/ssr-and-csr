import React, { Component } from 'react';
import { Carousel } from '../components/carousel';
import { ProdList } from '../components/prodList';
import './index.css';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';

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
      Promise.all([
        fetch('https://node-sample-api.herokuapp.com/api/home'),
        fetch('https://node-sample-api.herokuapp.com/api/products?page=1')
      ])
        .then(([carouselDataStream, productDataStream]) => {
          return new Promise(resolve => {
            Promise.all([carouselDataStream.json(), productDataStream.json()]).then(data => {
              resolve(data);
            });
          });
        })
        .then(([carouselData, productData]) => {
          this.setState({ initialData: { carouselData, productData } });
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
    let carouselData, productData;
    if (this.state.initialData) {
      carouselData = this.state.initialData.carouselData;
      productData = this.state.initialData.productData.data;
    }
    return (
      <div className={'flex-container'}>
        <Header {...this.props} />
        <div className="home">
          {carouselData && <Carousel imgs={carouselData.carousel} />}
          {productData && <ProdList products={productData} onLoadMore={this.onLoadMore} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
