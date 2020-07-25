import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import _ from "lodash";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return;

    const errors = {};
    for (let element of error.details)
      errors[element.path[0]] = element.message;

    return Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = (name, value) => {
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(this.state.account[name], schema);
    return error ? error[0] : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const error = this.validateProperty(input.name, input.value);
    console.log(error);
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    let { account, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          type="text"
          value={account.username}
          onChange={this.handleChange}
          label="Username"
          errors={errors.username}
        />

        <Input
          name="password"
          type="password"
          value={account.password}
          onChange={this.handleChange}
          label="Password"
          errors={errors.password}
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
