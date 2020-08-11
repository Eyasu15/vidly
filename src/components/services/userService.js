import http from "./httpService";
import { apiUrl } from "../utils/config.json";
import jwtDecode from "jwt-decode";

const usersUrl = apiUrl + "users";

function registerUser(user) {
  return http.post(usersUrl + "/register", user);
}

async function login(user) {
  const { data: jwt } = await http.post(usersUrl + "/login", user);
  localStorage.setItem("token", jwt);
}

function logout() {
  localStorage.removeItem("token");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export { registerUser, login, logout, getCurrentUser };
