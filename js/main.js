const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 710) {
        header.classList.add("scrolled");
    }else {
        header.classList.remove("scrolled");
    }
});

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});