import http from "./httpService";
import { apiUrl } from "../utils/config.json";

function getAllMovies() {
  return http.get(apiUrl + "movies");
}

function getOneMovie(movieId) {
  return http.get(apiUrl + "movies/" + movieId);
}

function saveMovie(movie) {
  return http.post(apiUrl + "movies", movie);
}

function deleteMovie(movieId) {
  return http.delete(apiUrl + "movies/" + movieId);
}

export { getAllMovies, getOneMovie, saveMovie, deleteMovie };
