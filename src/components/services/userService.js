import http from "./httpService";
import { apiUrl } from "../utils/config.json";
import jwtDecode from "jwt-decode";

const usersUrl = apiUrl + "users";
const tokenKey = "token";

function registerUser(user) {
  return http.post(usersUrl + "/register", user);
}

async function login(user) {
  console.log(user);
  const { data: jwt } = await http.post(usersUrl + "/login", user);
  localStorage.setItem(tokenKey, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export { registerUser, login, logout, getCurrentUser, loginWithJwt, getJwt };
