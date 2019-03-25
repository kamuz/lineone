$('.home .testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    navContainer: '.testimonials .slide-navigation',
    animateOut: 'fadeOut',
    navText: ['<i class="arrow-left"><img src="img/arrow-prev.svg" alt="left" /></i>','<i class="arrow-right"><img src="img/arrow-next.svg" alt="right" /></i>'],
});

$('.testimonials .slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    },
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    animateOut: 'fadeOut',
    navText: ['<i class="arrow-left"><img src="img/arrow-prev.svg" alt="left" /></i>','<i class="arrow-right"><img src="img/arrow-next.svg" alt="right" /></i>'],
});

function toggleMobileMenu() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}