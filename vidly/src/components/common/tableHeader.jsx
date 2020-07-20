import React, { Component } from "react";

class TableHeader extends Component {
  //column: array {label, path}
  //sortColumn: {path, order}
  //onSort: function()

  render() {
    let { columns, sortColumn, onSort } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.path || c.key}
              onClick={() => onSort(c.path)}
              scope="col"
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
