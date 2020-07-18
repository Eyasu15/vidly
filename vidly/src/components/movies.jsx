import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    let movies = [...this.state.movies];
    movies = movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };
  render() {
    return (
      <React.Fragment>
        <div>{this.renderTable()}</div>
      </React.Fragment>
    );
  }

  renderTable() {
    if (this.state.movies.length >= 1) {
      return (
        <div>
          <h3>Showing {this.state.movies.length} movies in the database.</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((m) => (
                <Movie
                  key={m._id}
                  movie={m}
                  id={m._id}
                  onDelete={this.handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <h3>There are no movies in the database</h3>;
  }
}

export default Movies;
