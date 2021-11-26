import supabase from "./supabaseClient";

const productsTable = supabase.from("Products");
const fetchResult = { data: null, error: null };

export async function getProducts() {
  const { data, error } = await productsTable.select();
  if (error) return { ...fetchResult, error: error.message };
  return { ...fetchResult, data: data };
}

export function getProductById(id) {
  // someThings
}
