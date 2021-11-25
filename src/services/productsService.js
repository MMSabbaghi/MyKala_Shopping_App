import supabase from "./supabaseClient";

const productsTable = supabase.from("Products");

export function getProducts() {
  return productsTable.select();
}

export function getProductById(id) {
  // someThings
}
