import React, { Component } from "react";
import Movies from "./components/movies";
import Navbar from "./components/navbar/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
