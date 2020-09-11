import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import {
  getOneRental,
  addRental,
  getMoviesDTO,
} from "../services/rentalsService";
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
    movies: [],
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

  async componentDidMount() {
    const { data: movies } = await getMoviesDTO();
    this.setState({ movies });
    console.log(movies);
    await this.populateRentalForm();
  }

  populateRentalForm = async () => {
    const rentalId = this.props.match.params.id;
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
    const { movies } = this.state;
    return (
      <div>
        <h1>Rental Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("movie", "Movie", movies)}
        </form>
      </div>
    );
  }
}

export default RentalForm;
