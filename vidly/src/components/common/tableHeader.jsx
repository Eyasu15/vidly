import React, { Component } from "react";

class TableHeader extends Component {
  //column: array {label, path}
  //sortColumn: {path, order}
  //onSort: function()

  sortIcon = (path, sortColumn) => {
    if (sortColumn.path === path) {
      const c =
        sortColumn.order === "asc" ? "fa fa-sort-asc" : "fa fa-sort-desc";
      return <i class={c} aria-hidden="true"></i>;
    }
    return null;
  };

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
              {this.sortIcon(c.path, sortColumn)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
