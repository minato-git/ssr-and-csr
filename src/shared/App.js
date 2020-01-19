import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className={'flex-container'}>
        <Header/>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Footer/>
      </div>
    );
  }
}

export default App;
