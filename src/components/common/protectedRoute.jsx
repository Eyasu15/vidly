import React from "react";
import getCurrentUser from "../services/userService";

const ProtectedRoute = ({ path, component: Component, render }) => {
  <Route
    path={path}
    render={(props) => {
      if (!getCurrentUser) return <Redirect to={props.login} />;
      return Component ? <Component {...props} /> : render(props);
    }}
  />;
};

export default ProtectedRoute;
