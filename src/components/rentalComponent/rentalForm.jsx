import React, { Component } from "react";
import Form from "../common/form";
import { Joi } from "joi-browser";
import { getOneRental, addRental } from "../services/rentalsService";
import { toast } from "react-toastify";

class RentalForm extends Form {
  state = {
    id: "",
    data: {
      movie: "",
      customer: "",
      dateOut: "",
      dateReturned: "",
      status: "",
      rentalFee: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.number(),
    movie: Joi.number().required,
    customer: Joi.number().required,
    dateOut: Joi.date().required,
    dateReturned: Joi.date(),
    status: Joi.string().required(),
    rentalFee: Joi.number(),
  };

  componentDidMount() {
    this.populateRentalForm();
  }

  populateRentalForm = async () => {
    const rentalId = this.props.match.prarams.id;
    if (rentalId === "new") return;
    try {
      const { data } = await getOneRental(rentalId);
      this.setState({ data });
      console.log(data);
    } catch (ex) {
      toast.error(ex.response.message);
    }
  };

  doSubmit = async () => {
    const data = this.state.data;
    try {
      await addRental(data);
    } catch (ex) {
      if (ex.response.status === 400) {
        const { errors } = this.state;
        errors.name = ex.response.message;
      }
    }
    this.props.history.replace("/rentals");
  };

  render() {
    return <div>Rental Form</div>;
  }
}

export default RentalForm;
