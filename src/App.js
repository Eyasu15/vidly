import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navbar/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import { getCurrentUser } from "./components/services/userService";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const user = this.state.user;

    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={user} />
        <main className="container">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/register" exact component={Register} />
            <Route
              path="/movies/:id"
              exact
              render={(props) => {
                if (!user) return <Redirect to={"/login"} />;
              }}
            />
            <Route
              path="/movies"
              exact
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
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
