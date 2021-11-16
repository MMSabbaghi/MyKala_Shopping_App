import http from "./httpServices";

export function getProducts() {
  return http.get("/product");
}

export function getProductById(id) {
  return http.get(`/product/${id}`);
}
