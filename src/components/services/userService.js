import http from "./httpService";
import { apiUrl } from "../utils/config.json";
import jwtDecode from "jwt-decode";

const usersUrl = apiUrl + "users";
const token = "token";
http.setJwt(token);
function registerUser(user) {
  return http.post(usersUrl + "/register", user);
}

async function login(email, password) {
  const { data: jwt } = await http.post(usersUrl + "/login", {
    email,
    password,
  });
  localStorage.setItem(token, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

function logout() {
  localStorage.removeItem(token);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export { registerUser, login, logout, getCurrentUser, loginWithJwt };
