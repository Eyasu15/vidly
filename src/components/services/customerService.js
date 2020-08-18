import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const customerUrl = apiUrl + "customers";

function getAllCustomers() {
  return http.get(customerUrl);
}

function getOneCustomer(id) {
  return http.get(customerUrl + "/" + id);
}

function addCustomer(customer) {
  return http.post(customerUrl, customer);
}

function deleteCustomer(id) {
  return http.get(customerUrl + "/" + id);
}

export { getAllCustomers, getOneCustomer, addCustomer, deleteCustomer };
