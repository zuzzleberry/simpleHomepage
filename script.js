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

let slide = 2;

let slideAutoChange = () => {
    slideChange(slide);
    if (slide >= 5) {
        slide = 0;
    }
    slide += 1;
    
    
    console.log(slide);
    
}

setInterval(slideAutoChange, 5000);

let changeSlidePress = (x) => {

    slide = x;

    console.log(x);
    console.log("test");

    slideChange(x);
}

let slideChange = (x) => {

    // Turn on selected slide   
    if (x === 1) {
        slide1.className = "slideOn";
    } else if (x === 2) {
        slide2.className = "slideOn";
    } else if (x === 3) {
        slide3.className = "slideOn";
    } else if (x === 4) {
        slide4.className = "slideOn";
    } else if (x === 5) {
        slide5.className = "slideOn";
    }
    
    // Turn off unused slides
    if (x !== 1) {
        slide1.className = "slideOff";
    }
    if (x !== 2) {
        slide2.className = "slideOff";
    }
    if (x !== 3) {
        slide3.className = "slideOff";
    }
    if (x !== 4) {
        slide4.className = "slideOff";
    }
    if (x !== 5) {
        slide5.className = "slideOff";
    }
}
















// View








