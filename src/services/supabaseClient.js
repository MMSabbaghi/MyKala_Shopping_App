import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ywstklxhhqzsalpazwyz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzg2Mzc1NSwiZXhwIjoxOTUzNDM5NzU1fQ.VXnc8iiAcRcgUarq5oYEqdrL3EpZHtReqCB3JWmbRA0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
