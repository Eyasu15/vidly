import React, { Component } from "react";

class CutomerTable extends Component {
  column = [
    { label: "Name", path: "name", clicked: false },
    { label: "Phone", path: "phone", clicked: false },
    { label: "Gold Member", path: "isGold", clicked: false },
    {
      key: "delete",
      content: (customer) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(customer)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    return <h1>It works</h1>;
  }
}

export default CutomerTable;
