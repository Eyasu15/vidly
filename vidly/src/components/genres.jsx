import React from "react";
import { genres } from "./services/fakeGenreService";

const Genres = () => {
  //active genre, array of genres, handleSelection
  return (
    <ul class="list-group">
      {genres.map((g) => {
        <li
          key={g.id}
          class={g.active ? "list-group-item active" : "list-group-item"}
        >
          {g.name}
        </li>;
      })}
    </ul>
  );
};

export default Genres;
