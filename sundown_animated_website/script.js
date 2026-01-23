const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// var a =document.querySelector("#elem1")
// var image =a.getAttribute("data-image");

function page4Animation() {
    var elemC = document.querySelector(".elem-container")
    var fix = document.querySelector(".fixed-img")
    elemC.addEventListener("mouseenter", function () {
        fix.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fix.style.display = "none"
    })
    // var elems = document.querySelectorAll(".elem")
    // elem1.addEventListener("mouseenter",function(){
    //     var image =elem1.getAttribute("data-image")
    //     fix.style.backgroundImage = `url(${image})`

    // } )

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fix.style.backgroundImage = `url(${image})`
        })
    })

}

// function swiperAnimation() {
//     // var swiper = new Swiper(".mySwiper", {
//     //   slidesPerView: "auto",
//     //   centeredSlides: true,
//     //   spaceBetween: 50,

//     // });

//     function swiperAnimation() {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: "auto",
//             centeredSlides: true,
//             spaceBetween: 50,

//             observer: true,
//             observeParents: true,
//             observeSlideChildren: true,

//             grabCursor: true,
//         });
//     }

// }

function menu() {
    var menu = document.querySelector(".nav h3")
    var full = document.querySelector(".full-scr")
    var navimg = document.querySelector(".nav img")
    // var div1 = document.querySelector(".full-div1")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = "0"
            navimg.style.opacity = 0
            flag = 1
            // div1.style.display= "none"
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
            //  div1.style.display= "block"
        }

    })
}

function loaderAnimation() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)

}

// swiperAnimation()
page4Animation()
menu()
loaderAnimation()




