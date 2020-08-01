import React, { Component } from "react";
import Movies from "./components/movies";
import Navbar from "./components/navbar/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Register from "./components/register";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/movies/:id" exact component={MovieForm} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/not-found" exact component={NotFound} />
            <Route path="/rentals" exact component={Rentals} />
            <Route path="/customers" exact component={Customers} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
