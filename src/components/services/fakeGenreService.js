export const genres = [
  { name: "All Genres" },
  { id: "1", name: "Comedy" },
  { id: "2", name: "Action" },
  { id: "3", name: "Thriller" },
];

export function getFakeGenres() {
  return genres.filter((g) => g);
}
