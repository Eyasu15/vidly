import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.path === "title")
      return <Link to={`/movies/` + item.id}>{item[column.path]}</Link>;
    return column.content ? column.content(item) : _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
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
