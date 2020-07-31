import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default NavBar;
