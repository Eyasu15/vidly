import React, { Component } from "react";

class Like extends Component {
  render() {
    let { movie, onLike } = this.props;
    let classes = "fa fa-heart";
    if (!movie.liked) classes += "-o";
    return <i className={classes} onClick={() => onLike(movie)}></i>;
  }
}

export default Like;
