const cart = document.querySelector(".cart");
const cartBtn = document.querySelector(".navbar__cart");

function showCart(cartElem) {
  cartElem.classList.add("active");
}

function hideCart(cartElem) {
  cartElem.classList.remove("active");
}

cartBtn.addEventListener("click", () => {
  if (!cart.classList.contains("active")) {
    showCart(cart);
  } else {
    hideCart(cart);
  }
});
