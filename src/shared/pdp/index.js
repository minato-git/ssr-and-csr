import React, { Component } from 'react';
import './pdp.css';
import Description from '../components/description/description';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';

class PDP extends Component {
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
      initialData
    };
  }

  componentDidMount() {
    if (!this.state.initialData) {
      fetch(`https://node-sample-api.herokuapp.com/api/products/${this.props.match.params.id}`)
        .then(data => data.json())
        .then(pdpData => {
          this.setState({
            initialData: {
              pdpData
            }
          });
        });
    }
  }

  render() {
    let pdpData;
    if (this.state.initialData) {
      pdpData = this.state.initialData.pdpData;
    }
    return (
      <div className={'flex-container'}>
        <Header {...this.props} />
        <div className={'pdp'}>{pdpData && <Description info={pdpData} />}</div>
        <Footer />
      </div>
    );
  }
}

export default PDP;
