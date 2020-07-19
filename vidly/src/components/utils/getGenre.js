export function getGenre(items, genre) {
  return items.filter((movie) => movie.genre.name === genre);
}
