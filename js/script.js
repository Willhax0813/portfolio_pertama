const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

menu = (icon) => icon.classList.toggle(".fi fi-br-cross");
