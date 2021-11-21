import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function signUpUser(userData) {
  return createUserWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  );
}

export function loginUser(loginData) {
  return signInWithEmailAndPassword(auth, loginData.email, loginData.password);
}
