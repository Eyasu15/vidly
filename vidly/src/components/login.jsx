import React, { Component } from "react";
import Input from "./common/input";

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
        <Input
          name="username"
          type="text"
          value={account.username}
          onChange={this.handleChange}
          label="Username"
        />
        <Input
          name="password"
          type="password"
          value={account.password}
          onChange={this.handleChange}
          label="Password"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
