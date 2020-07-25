import React from "react";
import Form from "./common/form";
import Joi, { errors } from "joi-browser";
import { saveMovie, getMovie } from "./services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      id: "",
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  componentDidMount() {
    const movie = getMovie(this.props.match.params.id);
    if (!movie) return;

    const data = {
      id: movie._id,
      title: movie.title,
      genre: movie.genre.name,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };

    this.setState({ data });
  }

  doSubmit = () => {
    let { title, genre, numberInStock, dailyRentalRate } = this.state.data;
    genre = { _id: genre, name: "" };
    const movie = { title, genre, numberInStock, dailyRentalRate };
    console.log(movie);
    saveMovie(movie);
    this.props.history.replace("/movies");
  };
  render() {
    const genres = [
      { name: "Action", value: "5b21ca3eeb7f6fbccd471818" },
      { name: "Comedy", value: "5b21ca3eeb7f6fbccd471814" },
      { name: "Thriller", value: "5b21ca3eeb7f6fbccd471820" },
    ];
    console.log(this.state.errors);
    return (
      <React.Fragment>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre", "select", genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
