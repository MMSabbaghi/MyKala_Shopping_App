import http from "./httpServices";

export function signUpUser(userData) {
  return http.post("/user/register", userData);
}

export function loginUser(loginData){
  return http.post("/user/login" , loginData);
}