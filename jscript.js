const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu__container--right");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("click");
}

const navLink = document.querySelectorAll(".menu__link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
