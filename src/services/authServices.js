import supabase from "./supabaseClient";

const auth = supabase.auth;
const authResult = { user: null, error: null };

export async function signUpUser(userData) {
  const { email, password } = userData;
  const { user, session, error } = await auth.signUp({ email, password });
  if (error) return { ...authResult, error: error.message };
  return { ...authResult, user: { ...user, token: session.access_token } };
}

export async function loginUser(loginData) {
  const { email, password } = loginData;
  const { user, session, error } = await auth.signIn({ email, password });
  if (error) return { ...authResult, error: error.message };
  return { ...authResult, user: { ...user, token: session.access_token } };
}
