import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import Genres from "./genres";
import { genres, getGenres } from "./services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    activePage: 1,
    genres: genres,
  };

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

  render() {
    let { length: count } = this.state.movies;
    let { pageSize, activePage, movies: allMovies } = this.state;
    let movies = paginate(allMovies, pageSize, activePage);
    console.log(movies);
    if (count < 1) return <p>There are no movies in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <Genres genres={getGenres()} />
        </div>
        <div className="col">
          <p>Showing {count} movies</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <tr key={m._id}>
                  <th scope="row">{m.title}</th>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <Like movie={m} onLike={this.handleLike} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(m)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
