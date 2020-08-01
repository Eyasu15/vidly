import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "./services/fakeGenreService";
import axios from "axios";

class MovieForm extends Form {
  state = {
    id: "",
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    id: Joi.number(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  async componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    await this.populateMovie();
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await axios.get(
        "http://localhost:8080/movies" + "/" + movieId
      );
      this.setState({ id: movieId, data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        this.props.history.replace("/not-found");
    }
  }

  mapToViewModel(movie) {
    return {
      id: movie.id,
      title: movie.title,
      genreId: movie.genre.id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    const { title, genreId, numberInStock, dailyRentalRate } = {
      ...this.state.data,
    };

    const genreArray = this.state.genres.filter((g) => g.id === 1);
    const genre = { id: genreId, name: genreArray.name };

    let movie = {
      title,
      genre,
      numberInStock,
      dailyRentalRate,
    };
    if (this.state.id) movie.id = this.state.id;
    console.log(movie);
    try {
      await axios.post("http://localhost:8080/movies", movie);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.message;
        this.setState({ errors });
      }
      alert("something went wrong");
    }

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
