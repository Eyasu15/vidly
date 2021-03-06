import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    let show = this.state.showMenu ? "show" : "";
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/movies">
          Vidly
        </Link>
        <button className="navbar-toggler" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <NavLink to="/movies" className="nav-item nav-link active">
            Movies
          </NavLink>
          {user && user.role === "ROLE_ADMIN" && (
            <React.Fragment>
              <NavLink to="/customers" className="nav-item nav-link">
                Customers
              </NavLink>
              <NavLink to="/rentals" className="nav-item nav-link">
                Rentals
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink to="/profile" className="nav-item nav-link">
                {user.name.toUpperCase()}
              </NavLink>
              <NavLink to="/logout" className="nav-item nav-link">
                Logout
              </NavLink>
            </React.Fragment>
          )}
          {!user && (
            <React.Fragment>
              <NavLink to="/login" className="nav-item nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-item nav-link">
                Register
              </NavLink>{" "}
            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
