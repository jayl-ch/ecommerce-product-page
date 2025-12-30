const navMenu = document.querySelector(".navbar__menu-btn");
const navClose = document.querySelector(".navbar__lists-close");
const navList = document.querySelector(".navbar__lists-wrapper");
const overlay = document.querySelector(".overlay");

function setOverlay(o) {
  o.classList.add("active");
}

function hideOverlay(o) {
  o.classList.remove("active");
}

navMenu.addEventListener("click", () => {
  navList.classList.add("active");
  setOverlay(overlay);
});

navClose.addEventListener("click", () => {
  navList.classList.remove("active");
  hideOverlay(overlay);
});

overlay.addEventListener("click", () => {
  navList.classList.remove("active");
  hideOverlay(overlay);
});
