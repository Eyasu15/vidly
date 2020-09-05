import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "./services/genreService";
import { getOneMovie, saveMovie } from "./services/movieService";
import { toast } from "react-toastify";

class MovieForm extends Form {
  state = {
    id: "",
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
      rate: "",
      info: "",
      description: "",
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
      .max(250)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
    rate: Joi.string().required().label("Rate"),
    info: Joi.string().required().label("Info"),
    description: Joi.string().required().label("Description"),
  };

  async componentDidMount() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
    await this.populateMovie();
  }

  async populateMovie() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    try {
      const { data: movie } = await getOneMovie(movieId);
      console.log(movie);
      const data = this.mapToViewModel(movie);
      this.setState({ id: movieId, data });
    } catch (ex) {
      if (ex.response && ex.response.status >= 400)
        this.props.history.replace("/not-found");
    }
    console.log(this.state.data);
  }

  mapToViewModel(movie) {
    const { title, genre, numberInStock, dailyRentalRate, rate } = movie;
    console.log(rate);
    const data = {
      title: title,
      genreId: genre.id,
      numberInStock: numberInStock,
      dailyRentalRate: dailyRentalRate,
    };
    if (rate) {
      data.rate = rate.rate;
      data.info = rate.info;
      data.description = rate.description;
    }
    return data;
  }

  doSubmit = async () => {
    const {
      title,
      genreId,
      numberInStock,
      dailyRentalRate,
      rate,
      info,
      description,
    } = {
      ...this.state.data,
    };

    const genreArray = this.state.genres.filter((g) => g.id === 1);
    const genre = { id: genreId, name: genreArray.name };

    let movie = {
      title,
      genre,
      numberInStock,
      dailyRentalRate,
      rate: {
        rate,
        info,
        description,
      },
    };
    if (this.state.id) movie.id = this.state.id;
    try {
      await saveMovie(movie);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.message;
        this.setState({ errors });
      }
      toast.info("something went wrong");
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
          {this.renderInput("dailyRentalRate", "Rental Rate")}
          {this.renderInput("rate", "Rate")}
          {this.renderInput("info", "Info")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
