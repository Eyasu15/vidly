import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { addCustomer } from "../services/customerService";

class CustomerForm extends Form {
  state = {
    id: "",
    data: { name: "", phone: "", isGold: false },
    errors: {},
  };

  schema = {
    id: Joi.number(),
    name: Joi.string().required().label("Name"),
    phone: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
      .error(() => {
        return {
          message: "Invalid input.",
        };
      }),
    isGold: Joi.boolean(),
  };

  doSubmit = async () => {
    const data = this.state.data;
    try {
      await addCustomer(data);
    } catch (ex) {
      if (ex.response.status == 400) {
        const { errors } = this.state;
        errors.name = ex.response.message;
      }
    }
    this.props.history.replace("/customers");
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
