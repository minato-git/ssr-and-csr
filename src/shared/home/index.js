import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
import {Carousel} from "../components/carousel";
import {ProdList} from "../components/prodList";
import {Constants} from "../constants";

import "./index.css";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Carousel imgs={Constants.imgUrls}/>
        <ProdList products={Constants.products}/>
      </div>
    );
  }
}

export default Home;
