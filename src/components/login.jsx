import React, { Component } from "react";
import Form from "./common/form";
import { login } from "./services/userService";
import Joi from "joi-browser";
import _ from "lodash";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password)
    } catch (error) {}
    console.log("Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default Login;
