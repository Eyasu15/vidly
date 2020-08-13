import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { onChange, data } = this.props;
    return (
      <div className="input-group flex-nowrap mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          name="search"
          value={data}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Search;
