import http from "./httpService";
import { apiUrl } from "../utils/config.json";

function getMovies() {
  return http.get(apiUrl + "movies");
}

function saveMovie() {
  return http.post(apiUrl + "movies");
}

function deleteMovie(movieId) {
  return http.delete(apiUrl + "movies/" + movieId);
}

export { getMovies, saveMovie, deleteMovie };
