import { db } from "./firebase";
import { collection, getDocs, getDoc } from "firebase/firestore";

const productsRef = collection(db, "products");

export function getProducts() {
  return getDocs(productsRef);
}

export function getProductById(id) {
  // return getDoc(productsRef);
}
