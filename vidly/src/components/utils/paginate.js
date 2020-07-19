export function paginate(items, pageSize, activePage) {
  let startIndex = pageSize * (activePage - 1);
  let movies = [];
  let movieIndex = 0;
  for (let i = startIndex; i < startIndex + pageSize; i++) {
    if (items[i] === undefined) break;
    movies[movieIndex++] = items[i];
  }
  return movies;
}
