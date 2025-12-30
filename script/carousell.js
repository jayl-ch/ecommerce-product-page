const carousell = document.querySelector(".product__img-wrapper");

const left = carousell.querySelector(".prev-btn");
const right = carousell.querySelector(".next-btn");
const track = carousell.querySelector(".product-img");

const size = 10;

right.addEventListener("click", () => {
  track.scrollBy({ left: size, behavior: "smooth" });
});

left.addEventListener("click", () => {
  track.scrollBy({ left: -size, behavior: "smooth" });
});
