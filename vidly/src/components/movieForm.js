import React, { Component } from "react";

class MovieForm extends Component {
  state = {};

  handleSave = () => {
    this.props.history.replace("/movies");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.id} </h1>
        <button className="btn btn-secondary btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieForm;
