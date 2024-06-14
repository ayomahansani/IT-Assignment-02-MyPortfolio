// ----------------------- Start Home Page -----------------------

// header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
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

// ----------------------- End Home Page -----------------------



// ----------------------- Start My Assignments Page -----------------------

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

function currentSlide(n) {
    counter = n;
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
        dot[i].classList.remove("active");
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }

    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add("active");
}

// ----------------------- End My Assignments Page -----------------------



// ----------------------- Start About Me Page CV-----------------------

// Get the modal
var modal = document.getElementById("cvModal");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("cvImage");


// When the user clicks on the image, open the modal
img.onclick = function() {
    modal.style.display = "block";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// ----------------------- End About Me Page CV-----------------------




/*

// ----------------------- Start Contact Me Page -----------------------


// Function to clear form fields
function clearForm() {
    document.getElementById("contactForm").reset();
}


// Add event listener to form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form data asynchronously
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(event.target)
    })
        .then(response => {
            if (response.ok) {
                // If response is successful, clear form fields
                clearForm();
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted successfully!',
                    background: 'rgb(0,0,0)',
                    color: 'rgb(255,255,255)',
                    confirmButtonColor: '#B99292',
                    iconColor: '#B99292',
                });
            } else {
                // Handle error response
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Error submitting form!",
                    background: 'rgb(0,0,0)',
                    color: 'rgb(255,255,255)',
                    confirmButtonColor: '#B99292',
                    iconColor: '#B99292',
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error submitting form!",
                background: 'rgb(0,0,0)',
                color: 'rgb(255,255,255)',
                confirmButtonColor: '#B99292',
                iconColor: '#B99292',
            });
        });
});


// ----------------------- End Contact Me Page -----------------------*/
