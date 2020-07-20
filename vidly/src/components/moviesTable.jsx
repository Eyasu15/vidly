import React, { Component } from "react";
import Like from "./common/like";
import { render } from "@testing-library/react";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    { key: "like" },
    { key: "delete" },
  ];

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
    let { movies, onLike, onDelete, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
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
