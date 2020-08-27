import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const rentalUrl = apiUrl + "rentals";

function getAllRentals() {
  return http.get(rentalUrl);
}

function getUserRentals(userId) {
  return http.get(rentalUrl, userId);
}

function deleteRental(id) {
  return http.delete(rentalUrl + "/" + id);
}

function addRental(rental) {
  return http.post(rentalUrl, rental);
}
