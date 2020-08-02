import http from "./httpService";
import apiUrl from "../utils/config.json";

const usersUrl = "http://localhost:8080/api/" + "users";

function registerUser(user) {
  return http.post(usersUrl, user);
}

export { registerUser };
