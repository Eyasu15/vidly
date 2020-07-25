import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import SelectInput from "./selectInput";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return;

    const errors = {};
    for (let element of error.details)
      errors[element.path[0]] = element.message;

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input.name, input.value);
    if (!errorMessage) delete errors[input.name];
    else errors[input.name] = errorMessage;

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", options) {
    let { data, errors } = this.state;
    if (type === "select") {
      return (
        <SelectInput
          name={name}
          label={label}
          value={data[name]}
          options={options}
          onChange={this.handleChange}
          errors={errors[name]}
        />
      );
    }
    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        errors={errors[name]}
      />
    );
  }
}

export default Form;
