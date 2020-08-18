import http from "./httpService";
import { apiUrl } from "../utils/config.json";
import jwtDecode from "jwt-decode";

const usersUrl = apiUrl + "users";
const tokenKey = "token";
http.setJwt(getHeader());

if (isUserExpired()) logout();

function isUserExpired() {
  const millis = Date.now();
  const user = getCurrentUser();
  if (user) var { exp } = user;
  return exp > millis;
}

function registerUser(user) {
  return http.post(usersUrl + "/register", user);
}

async function login(email, password) {
  const { data: jwt } = await http.post(usersUrl + "/login", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem("header", "Bearer " + jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("header");
}

function getHeader() {
  return localStorage.getItem("header");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export { registerUser, login, logout, getCurrentUser, loginWithJwt, getHeader };
