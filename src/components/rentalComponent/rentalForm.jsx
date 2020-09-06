import React, { Component } from "react";
import Form from "../common/form";

class RentalForm extends Form {
  state = {
    id: "",
    data: {
      movie: "",
      customer: "",
    },
  };
  render() {
    return <div>Rental Form</div>;
  }
}

export default RentalForm;
