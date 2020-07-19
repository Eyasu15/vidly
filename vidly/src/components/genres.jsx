import React from "react";

const Genres = (props) => {
  //active genre, array of genres, handleSelection
  let { genres, activeGenre, onGenreChange } = props;
  return (
    <div class="list-group">
      {genres.map((g) => (
        <a
          key={g.name}
          class={
            g.name === activeGenre
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onGenreChange(g)}
        >
          {g.name}
        </a>
      ))}
    </div>
  );
};

export default Genres;
