const cart = document.querySelector(".cart");
const cartBtn = document.querySelector(".navbar__cart");
const quantityElement = document.querySelector(".quantity");
const cartInventory = document.querySelector(".cart__inventory");
const addtocart = document.querySelector(".add-to-cart");

let quantity = 0;

function showCart(cartElem) {
  cartElem.classList.add("active");
}

function hideCart(cartElem) {
  cartElem.classList.remove("active");
}

function addInventory(cartInv, qnty, cartButton) {
  cartInv.innerHTML = "";

  const receiptWrapper = document.createElement("div");
  receiptWrapper.classList.add("receipt-wrapper");

  const div = document.createElement("div");
  div.classList.add("receipt");

  const img = document.createElement("img");
  img.src = "images/image-product-1-thumbnail.jpg";

  const divText = document.createElement("div");
  divText.classList.add("receipt__text");

  const pTitle = document.createElement("p");
  pTitle.classList.add("receipt__title");
  pTitle.textContent = "Fall Limited Edition Sneakers";

  const pPrice = document.createElement("p");
  pPrice.classList.add("receipt__price");
  pPrice.innerHTML = `$125.00 x ${quantity} <strong>$${125 * qnty.value}</strong>`;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");

  const delImg = document.createElement("img");
  delImg.src = "images/icon-delete.svg";
  delImg.style.pointerEvents = "none";

  const checkout = document.createElement("button");
  checkout.classList.add("checkout");
  checkout.textContent = "Checkout";

  delBtn.appendChild(delImg);
  divText.append(pTitle, pPrice);
  div.append(img, divText, delBtn);
  receiptWrapper.append(div, checkout);

  cartInv.appendChild(receiptWrapper);

  const spanQty = document.createElement("span");
  spanQty.textContent = qnty.value;
  cartButton.appendChild(spanQty);

  cartInv.style.height = "auto";
}

function removeItem(cartInv, target, cartButton) {
  target.parentNode.parentNode.remove();

  const empty = document.createElement("span");
  empty.textContent = "Your cart is empty.";
  cartInv.appendChild(empty);
  cartInv.style.height = "15rem";
  cartButton.querySelector(":scope > span").remove();
}

cartBtn.addEventListener("click", () => {
  if (!cart.classList.contains("active")) {
    showCart(cart);
  } else {
    hideCart(cart);
  }
});

quantityElement.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("decrease")) {
    if (quantity < 1) return;
    quantity -= 1;
  } else if (target.classList.contains("increase")) {
    quantity += 1;
  }
  quantityElement.querySelector("[type=number]").value = quantity;
});

addtocart.addEventListener("click", () => {
  if (quantity < 1) return;
  addInventory(
    cartInventory,
    quantityElement.querySelector("[type=number]"),
    cartBtn,
  );

  const del = document.querySelector(".delete");
  del.addEventListener("click", (e) => {
    removeItem(cartInventory, e.target, cartBtn);
  });
});
