export default function checkInCart(cart, productId) {
  return cart.some((p) => p._id === productId);
}
