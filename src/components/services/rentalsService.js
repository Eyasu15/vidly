import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const rentalUrl = apiUrl + "rentals";

function getAllRentals() {
  return http.get(rentalUrl);
}
