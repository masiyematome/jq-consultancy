
const navTogglerButton = document.querySelector(".nav-toggler");
const mainMenu = document.querySelector("#main-menu");
const navbarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-button");

navTogglerButton.addEventListener("click" , ()=> {
    mainMenu.classList.add("displaying");
    navbarLinks.classList.add("displaying");
    closeButton.classList.add("displaying");
})

closeButton.addEventListener("click" , () => {
    mainMenu.classList.remove("displaying");
    navbarLinks.classList.remove("displaying");
    closeButton.classList.remove("displaying");
})
