
const navigationBar = document.querySelector(".navigation-bar");
const navTogglerButton = document.querySelector(".nav-toggler");
const mainMenu = document.querySelector("#main-menu");
const navbarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-button");
const links = document.querySelectorAll("#main-menu a");

navigationBar.addEventListener("click" , (event) => {
    const clickedButton = event.target;

    if (clickedButton.classList.contains("nav-toggler")) {
        mainMenu.classList.add("displaying");
        navbarLinks.classList.add("displaying");
        closeButton.classList.add("displaying");
        navTogglerButton.classList.add("hiding");
        document.body.style.overflow = "hidden";
    }

    else if(clickedButton.classList.contains("close-button")){
        mainMenu.classList.remove("displaying");
        navbarLinks.classList.remove("displaying");
        closeButton.classList.remove("displaying");
        navTogglerButton.classList.remove("hiding");
        document.body.style.overflow = "scroll";
    }
})

links.forEach(link => {


    link.addEventListener("click", () => {

        Array.from(links).forEach(individualKey => {
            individualKey.classList.remove("active");
        })

        if (mainMenu.classList.contains("displaying")) {
            mainMenu.classList.remove("displaying");
            navbarLinks.classList.remove("displaying");
            navTogglerButton.classList.remove("hiding");
            document.body.style.overflow = "scroll";

        }

        link.classList.add("active");

    })

})
