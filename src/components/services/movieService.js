import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const moviesUrl = apiUrl + "movies";

function getAllMovies() {
  return http.get(moviesUrl);
}

function getOneMovie(movieId) {
  return http.get(moviesUrl + "/" + movieId);
}

function saveMovie(movie) {
  return http.post(moviesUrl, movie);
}

function deleteMovie(movieId) {
  return http.delete(moviesUrl + "/" + movieId);
}

export { getAllMovies, getOneMovie, saveMovie, deleteMovie };
