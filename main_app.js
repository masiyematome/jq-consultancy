
const navTogglerButton = document.querySelector(".nav-toggler");
const mainMenu = document.querySelector("#main-menu");
const navbarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-button");
const services = document.querySelectorAll(".service");
const links = document.querySelectorAll("a");

navTogglerButton.addEventListener("click" , ()=> {
    mainMenu.classList.add("displaying");
    navbarLinks.classList.add("displaying");
    closeButton.classList.add("displaying");
    navTogglerButton.classList.add("hiding");
})

closeButton.addEventListener("click" , () => {
    mainMenu.classList.remove("displaying");
    navbarLinks.classList.remove("displaying");
    closeButton.classList.remove("displaying");
    navTogglerButton.classList.remove("hiding");
})

links.forEach(link => {
    link.addEventListener("click", () => {
        if (mainMenu.classList.contains("displaying")) {
            mainMenu.classList.remove("displaying");
            navbarLinks.classList.remove("displaying");
            navTogglerButton.classList.remove("hiding");

        }
    })
})