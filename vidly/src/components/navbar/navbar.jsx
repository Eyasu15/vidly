import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/movies">
          Vidly
        </Link>
        <div id="navbarNavDropdown">
          <NavLink to="/movies" className="nav-item nav-link">
            Movies
          </NavLink>
          <NavLink to="/customers" className="nav-item nav-link">
            Customers
          </NavLink>
          <NavLink to="/rentals" className="nav-item nav-link">
            Rentals
          </NavLink>
          <NavLink to="/login" className="nav-item nav-link">
            Login
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
