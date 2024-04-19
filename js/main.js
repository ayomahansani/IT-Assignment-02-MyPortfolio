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

const myslide = document.querySelectorAll('.mySlider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000)
}

function slidefun(n){
    let i;

    for(i=0; i<myslide.length; i++){
        myslide[i].style.display = "none";
    }
    for(i=0; i<dot.length; i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

// ------------- End My Assignments Page -------------