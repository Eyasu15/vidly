import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { onChange, data } = this.props;
    return (
      <div class="input-group flex-nowrap mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">
            Search
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          name="search"
          value={data}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Search;
