import React from "react";

const ProtectedRoute = (props) => {
  <Route
    path={props.path}
    render={(props) => {
      if (!props.user) return <Redirect to={props.login} />;
    }}
  />;
};
