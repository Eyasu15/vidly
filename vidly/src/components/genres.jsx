import React from "react";

const Genres = (props) => {
  //active genre, array of genres, handleSelection
  let { genres } = props;
  return (
    <div class="list-group">
      {genres.map((g) => (
        <a
          key={g.id}
          class={
            g.active
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {g.name}
        </a>
      ))}
    </div>
  );
};

export default Genres;
