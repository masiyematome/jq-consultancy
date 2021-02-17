
const navTogglerButton = document.querySelector(".nav-toggler");
const mainMenu = document.querySelector("#main-menu");
const navbarLinks = document.querySelector(".navbar-links");

navTogglerButton.addEventListener("click" , ()=> {
    mainMenu.classList.add("displaying");
    navbarLinks.classList.add("displaying");
})
