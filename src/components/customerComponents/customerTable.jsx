import React, { Component } from 'react';

class CutomerTable extends Component {
    column = [ 
        { label: "Name", path: "name", clicked: false },
        { label: "Phone", path: "phone", clicked: false },
        { label: "Gold Member", path: "isGold", clicked: false },
        {    key: "delete",
        content: (movie) => (
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(movie)}
          >
            Delete
          </button>
        ),}
    ];
    render() { 
        return (  );
    }
}
 
export default CutomerTable;