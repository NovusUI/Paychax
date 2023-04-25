const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector("nav.menu");
const paychexSmall = document.querySelector("#paychex-small")

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    // menu.style.display = "flex";
    // paychexSmall.style.display= "none";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    // menu.style.display = "none";
    // paychexSmall.style.display = "flex";
    menuOpen = false;
  }
});