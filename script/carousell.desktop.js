const carousellDesk = document.querySelector(".product__img-thumbnail.default");
const thumbnail = document.querySelector(".product-img");

const lightbox = document.querySelector(".product__img-wrapper-lightbox");
const track = document.querySelector(".product-img-lightbox");
const prev = document.querySelector(".prev-btn-lightbox");
const next = document.querySelector(".next-btn-lightbox");

const carousellLightbox = document.querySelector(
  ".product__img-thumbnail.lightbox",
);
const closeLightbox = document.querySelector(".product__img-close-btn");
const lightboxOverlay = document.querySelector(".lightbox-overlay");
const thumbnailLightbox = document.querySelector(".product-img-lightbox");

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

/* ============ lightbox ============ */
let lightboxCurrentIndex = 0;

carousellLightbox.addEventListener("click", (e) => {
  const target = e.target;

  for (const cls in positions) {
    if (target.classList.contains(cls)) {
      const index = positions[cls];

      thumbnailLightbox.scrollBy({
        left: index - lightboxCurrentIndex,
      });

      lightboxCurrentIndex = index;
      break;
    }
  }
});

function hideLightbox(lbox, lboxOverlay) {
  lbox.classList.remove("active");
  lboxOverlay.classList.remove("active");
}

function showLightbox(lbox, lboxOverlay) {
  lbox.classList.add("active");
  lboxOverlay.classList.add("active");
}

const size = 10;

prev.addEventListener("click", () => {
  track.scrollBy({ left: -size, behavior: "smooth" });
  if (lightboxCurrentIndex < 1) return;
  lightboxCurrentIndex -= 464;
});
next.addEventListener("click", () => {
  track.scrollBy({ left: size, behavior: "smooth" });
  if (lightboxCurrentIndex > 1391) return;
  lightboxCurrentIndex += 464;
});

closeLightbox.addEventListener("click", () => {
  hideLightbox(lightbox, lightboxOverlay);
});

thumbnail.addEventListener("click", () => {
  showLightbox(lightbox, lightboxOverlay);
});

lightboxOverlay.addEventListener("click", () => {
  hideLightbox(lightbox, lightboxOverlay);
});
