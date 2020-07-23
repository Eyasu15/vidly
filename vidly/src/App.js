import React, { Component } from "react";
import Movies from "./components/movies";
import Navbar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Navbar />
        <Movies />
      </main>
    );
  }
}

export default App;
