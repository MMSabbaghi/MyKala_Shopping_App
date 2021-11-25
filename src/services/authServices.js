import supabase from "./supabaseClient";

const auth = supabase.auth;

export function signUpUser(userData) {
  const { email, password } = userData;
  return auth.signUp({ email, password });
}

export function loginUser(loginData) {
  const { email, password } = loginData;
  return auth.signIn({ email, password });
}
