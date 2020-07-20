import React, { Component } from "react";
import Like from "./common/like";
import { render } from "@testing-library/react";

class MoviesTable extends Component {
  handleSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    let { movies, onLike, onDelete, onSort } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.handleSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => this.handleSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => this.handleSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => this.handleSort("dailyRentalRate")} scope="col">
              Rate
            </th>
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
                <Like movie={m} onLike={onLike} />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => onDelete(m)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
