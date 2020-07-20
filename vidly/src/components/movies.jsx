import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import Genres from "./genres";
import { getGenres } from "./services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    activePage: 1,
    genres: [],
    activeGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    let movies = [...this.state.movies];
    movies = movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  handleGenreChange = (genre) => {
    this.setState({ activeGenre: genre.name });
  };

  handleSort = (path) => {
    console.log(path);
    let sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.setState({ sortColumn });
  };

  render() {
    let { length: count } = this.state.movies;
    let {
      pageSize,
      activePage,
      movies: allMovies,
      activeGenre,
      sortColumn,
    } = this.state;

    let filtered =
      activeGenre !== "All Genres"
        ? allMovies.filter((movie) => movie.genre.name === activeGenre)
        : allMovies;

    count = filtered.length;

    console.log(filtered);

    let movies = _.sortBy(filtered, [sortColumn.path], [sortColumn.order]);

    movies = paginate(allMovies, pageSize, activePage);

    if (count < 1) return <p>There are no movies in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <Genres
            genres={getGenres()}
            activeGenre={this.state.activeGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            activePage={activePage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
