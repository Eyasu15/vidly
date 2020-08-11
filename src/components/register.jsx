import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { registerUser } from "./services/userService";

class Register extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      await registerUser(this.state.data);
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.email = ex.response.data.message;
      this.setState({ errors });
      throw Error;
    }

    this.props.history.replace("/login");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default Register;
