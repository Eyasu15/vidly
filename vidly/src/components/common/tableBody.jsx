import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.path === "title")
      return <Link to={`/movies/` + item._id}>{item[column.path]}</Link>;
    return column.content ? column.content(item) : _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

// What are the interface of this component?
// items : array of objects //movies
// columns: array of paths

{
  /* <tbody>
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
</tbody> */
}
