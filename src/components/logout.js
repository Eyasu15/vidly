import React from "react";
import { logout } from "./services/userService";

const Logout = () => {
  logout();
  window.location = "/";
};

export default Logout;
