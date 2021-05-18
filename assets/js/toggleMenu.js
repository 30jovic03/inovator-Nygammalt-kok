// function toggleMenu() {
//   var nav = document.getElementById("main-navbar");
//   if (nav.className === "navbar") {
//     nav.classList.add('show-menu');
//     nav.style.height = '100vh';
//   } else {
//     nav.classList.remove('show-menu');
//     nav.style.height = 0;
//   }
// }

const hamburger = document.querySelector(".my-nav-icon");
const nav = document.getElementById("main-navbar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});