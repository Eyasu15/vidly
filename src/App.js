import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navbar/navbar";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import { getCurrentUser } from "./components/services/userService";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/protectedRoute";
import CustomerForm from "./components/customerComponents/customerForm";
import Rentals from "./components/rentalComponent/rentals";

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
              path="/movies"
              exact
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            {user && user.role === "ROLE_ADMIN" && (
              <React.Fragment>
                <Route
                  path="/movies"
                  exact
                  render={(props) => (
                    <Movies {...props} user={this.state.user} />
                  )}
                />
                <Route path="/movies/:id" component={MovieForm} />
                <Route path="/customers" exact component={Customers} />
                <Route path="/customers/:id" exact component={CustomerForm} />
              </React.Fragment>
            )}
            {user && user.role === "ROLE_USER" && <div></div>}
            {!user && <Redirect from="/movies/:id" to="/login" />}
            <Route path="/not-found" exact component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
