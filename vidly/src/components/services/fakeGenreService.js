export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", active: false, name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", active: false, name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", active: false, name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
