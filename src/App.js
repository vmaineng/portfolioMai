import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Projects} from './components/Projects'
import { Footer } from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Projects />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    <Footer />
      </div>
    );
  }
}

export default App;
