import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import _ from "lodash";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //handle submission
  };

  render() {
    let { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          type="text"
          value={data.username}
          onChange={this.handleChange}
          label="Username"
          errors={errors.username}
        />

        <Input
          name="password"
          type="password"
          value={data.password}
          onChange={this.handleChange}
          label="Password"
          errors={errors.password}
        />

        <button className="btn btn-primary" disabled={this.validate()}>
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
