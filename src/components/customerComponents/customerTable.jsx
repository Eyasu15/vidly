import React, { Component } from "react";
import Table from "../common/table";

class CutomerTable extends Component {
  columns = [
    { label: "Name", path: "name", clicked: false },
    { label: "Phone", path: "phone", clicked: false },
    { label: "Gold Member", path: "isGold", clicked: false },
    {
      key: "delete",
      content: (customer) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(customer.id)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    let { customers, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        items={customers}
        onSort={onSort}
      />
    );
  }
}

export default CutomerTable;
