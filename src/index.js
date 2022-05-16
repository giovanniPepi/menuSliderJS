import style from "./style.css";

const menuBtn = document.querySelector(".menuBtn");
const menuBtn2 = document.querySelector(".menuBtn2");

const getMenu = (menu, displayType) => {
  // changes classes
  if (menu.style.display === displayType) {
    menu.style.display = "none";
  } else {
    menu.style.display = displayType;
  }
};

const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => getMenu(menu, "flex"));

const container2 = document.querySelector(".container2");
const menu2 = document.querySelector(".menu2");
container2.addEventListener("mouseenter", () => getMenu(menu2, "flex"));
container2.addEventListener("mouseleave", () => getMenu(menu2, "none"));
