export const genres = [
  { name: "All Genres" },
  { id: "2", name: "Action" },
  { id: "1", name: "Comedy" },
  { id: "3", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
