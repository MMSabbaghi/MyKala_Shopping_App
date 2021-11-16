import http from "./httpServices";

export function signUpUser(userData) {
  return http.post("/user/register", userData);
}
