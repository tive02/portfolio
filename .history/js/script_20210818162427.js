// ======= Dark Theme =========
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Previously selected topic (Checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//validate if the user has previously chosen a topic

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //ADD or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrenIcon());
});

console.log("theme setting is working !!!");

// ========== MENU SHOW y HIDDEN =======

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//Menu Show
/*  Validate exist of constant*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//Menu Hide
/*  Validate exist of constant*/
if (navClose) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
console.log("menu and  setting is working !!!");

// ========== Remove menu profile  =======
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // user  click on nav__link, we removed show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

console.log("Remove menu profile is working !!!");
