import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class CustomerForm extends Form {
  state = {
    id: "",
    data: { name: "", phone: "", isGold: false },
    errors: {},
  };

  schema = {
    id: Joi.number().required(),
    name: Joi.string().required().label("Name"),
    phone: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
      .label("Phone"),
    isGold: Joi.boolean(),
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    const customerTier = [
      { id: true, name: "Yes" },
      { id: false, name: "No" },
    ];
    return (
      <div>
        <h1>Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderSelect("isGold", "Gold", customerTier)}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
