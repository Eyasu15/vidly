import React, { Component } from "react";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    let { account } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={account.username}
            onChange={this.handleChange}
            name="username"
            id="username"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={account.password}
            onChange={this.handleChange}
            name="password"
            id="password"
            type="password"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
