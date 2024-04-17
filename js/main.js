// ------------- Start Home Page -------------

// header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 680) {
        header.classList.add("scrolled");
    }else {
        header.classList.remove("scrolled");
    }
});

// end header


// menu icon

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});

// end menu icon

// ------------- End Home Page -------------

// ------------- Start My Assignments Page -------------

// SWIPER

let swiper = new Swiper('.myAssignments-section-container' , {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

// end SWIPER


// ------------- End My Assignments Page -------------