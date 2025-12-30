const carousellDesk = document.querySelector(".product__img-thumbnail");
const thumbnail = document.querySelector(".product-img");

let currentIndex = 0;

const positions = {
  "thumb-1": 0,
  "thumb-2": 464,
  "thumb-3": 928,
  "thumb-4": 1392,
};

carousellDesk.addEventListener("click", (e) => {
  const target = e.target;

  for (const cls in positions) {
    if (target.classList.contains(cls)) {
      const index = positions[cls];

      thumbnail.scrollBy({
        left: index - currentIndex,
      });

      currentIndex = index;
      break;
    }
  }
});
