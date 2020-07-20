import React from "react";

const Genres = (props) => {
  let { genres, activeGenre, onGenreChange } = props;
  return (
    <div className="list-group">
      {genres.map((g) => (
        <a
          key={g.name}
          className={
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
