import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class CustomerForm extends Form {
  state = {
    id: "",
    customerName: "",
    phone: "",
    isGold: "",
    errors: {},
  };

  schema = {
    id: Joi.number().required(),
    customerName: Joi.string().required().label("Name"),
    phone: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
      .label("Phone"),
  };
  render() {
    const customerTier = ["Gold", "Regular"];
    return (
      <div>
        <h1>Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("customerName", "Name")}
          {this.renderSelect("isGold", "Level", customerTier)}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
