import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
