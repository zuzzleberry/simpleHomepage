// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }




// Control

let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");
let slide5 = document.getElementById("slide5");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

button1.addEventListener("click", function() {
    changeSlidePress(1);
    console.log(slide);
})
button2.addEventListener("click", function() {
    changeSlidePress(2);
    console.log(slide);
})
button3.addEventListener("click", function() {
    changeSlidePress(3);
    console.log(slide);
})
button4.addEventListener("click", function() {
    changeSlidePress(4);
    console.log(slide);
})
button5.addEventListener("click", function() {
    changeSlidePress(5);
    console.log(slide);
})




// function handleClickWithMoreParams(evt, ...args) {
//     // this function takes the event, and also any number of
//     //   additional arguments. These are now in the args array.
// }

// myButton.addEventListener("click", function (evt) {
//     // here, we can use our custom function. We can include
//     //  any custom parameters we might like, as it is no longer
//     //  the event handler itself.
//     handleClickWithMoreParams(evt, param1, param2, paramN);
// })



// Model

let slide = 1;

let slideAutoChange = () => {
    slideChange(slide);
    if (slide >= 5) {
        slide = 0;
    }
    slide += 1;
    slideChange(slide);
    
    console.log(slide);
    
}

setInterval(slideAutoChange, 6000);



let changeSlidePress = (x) => {

    slide = x;

    console.log(x);
    console.log("test");

    slideChange(x);
}


















// View



let slideChange = (x) => {

    // Turn on selected slide   
    if (x === 1) {
        slide1.className = "slideOn";
        button1.className = "slideshowButtonOn";
    } else if (x === 2) {
        slide2.className = "slideOn";
        button2.className = "slideshowButtonOn";
    } else if (x === 3) {
        slide3.className = "slideOn";
        button3.className = "slideshowButtonOn";
    } else if (x === 4) {
        slide4.className = "slideOn";
        button4.className = "slideshowButtonOn";
    } else if (x === 5) {
        slide5.className = "slideOn";
        button5.className = "slideshowButtonOn";
    }
    
    // Turn off unused slides
    if (x !== 1) {
        slide1.className = "slideOff";
        button1.className = "slideshowButton";
    }
    if (x !== 2) {
        slide2.className = "slideOff";
        button2.className = "slideshowButton";
    }
    if (x !== 3) {
        slide3.className = "slideOff";
        button3.className = "slideshowButton";
    }
    if (x !== 4) {
        slide4.className = "slideOff";
        button4.className = "slideshowButton";
    }
    if (x !== 5) {
        slide5.className = "slideOff";
        button5.className = "slideshowButton";
    }
}



// When the user scrolls the page, execute myFunction
// window.onscroll = () => {
//     stickyNav()
// };

// Get the navbar
let navbar = document.getElementById("menubar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
let stickyNav = () => {
    console.log(window.pageYOffset)
    console.log(sticky)
    if (window.pageYOffset >= sticky) {
        navbar.className = "menu sticky";
    } else {
        navbar.className = "menu";
    }
}
window.addEventListener("scroll", stickyNav);

AOS.init({
    duration: 1200,
  })


