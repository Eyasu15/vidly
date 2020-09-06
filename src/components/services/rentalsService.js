import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const rentalUrl = apiUrl + "rentals";

function getAllRentals() {
  return http.get(rentalUrl);
}

function getOneRental(id) {
  return http.get(rentalUrl + "/" + id);
}

function deleteRental(id) {
  return http.delete(rentalUrl + "/" + id);
}

function addRental(rental) {
  return http.post(rentalUrl, rental);
}

function getMoviesDTO() {
  return http.get(rentalUrl + "/moviesDTO");
}

function returnRental(rental) {
  return http.put(rentalUrl, rental);
}

export {
  getAllRentals,
  addRental,
  getMoviesDTO,
  deleteRental,
  getOneRental,
  returnRental,
};
