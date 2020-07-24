import React, { Component } from "react";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
