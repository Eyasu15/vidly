import React, { Component } from "react";

class Movie extends Component {
  render() {
    let { title, genre, numberInStock, dailyRentalRate } = this.props.movie;
    console.log(title);

    return (
      <tr>
        <th scope="row">{title}</th>
        <td>{genre.name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
