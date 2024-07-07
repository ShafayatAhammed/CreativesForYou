const html = document.getElementById("html");
const smallNavbar = document.getElementById("smNav");
const smallNavbarToggler = document.getElementById("smNavToggBtn");
const darkModeToggler = document.getElementById("darkModeToggler");
const smallDarkModeToggler = document.getElementById("smallDarkModeToggler");

const onResizeSmallNavbarToggler = () => {
  if (window.innerWidth > 900 && !smallNavbar.classList.contains("hidden")) {
    smallNavbar.classList.add("hidden");
  } else {
    return;
  }
};

const toggleDarkMode = () => {
  html.classList.toggle("dark");
};

window.addEventListener("load", () => {
  window.addEventListener("resize", onResizeSmallNavbarToggler);
});

smallNavbarToggler.addEventListener("click", () => {
  smallNavbar.classList.toggle("hidden");
});

darkModeToggler.addEventListener("click", toggleDarkMode);
smallDarkModeToggler.addEventListener("click", toggleDarkMode);
