window.onscroll = function () {
    myFunction()
    myFunction2()
};

var navbar = document.getElementById("navv");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-fixed-top");
    } else {
        navbar.classList.remove("navbar-fixed-top");
    }
}

function myFunction2() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.remove("sticky");
    } else {
        navbar.classList.add("sticky");
    }
}
$(document).ready(function () {
    $('.bb').on('click touchstart', function () {
        console.log("hi");

    });
    $('.mybtn2').on('click touchstart', function () {
        console.log("hi");

    });

    var Title = $('grid-title');
    var Content = $('grid-content');

    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 2000,
        origin: "bottom"
    });
    sr.reveal('.showcase-left', {
        duration: 2000,
        origin: "left",
        distance: "300px",
        viewFactor: 0.4
    });
    sr.reveal('.showcase-right', {
        duration: 2000,
        origin: "top",
        distance: "300px",
        viewFactor: 0.4
    });
    sr.reveal('.showcase-btn', {
        duration: 2000,
        origin: "bottom",
        delay: 2000
    });
    sr.reveal('#par div', {
        duration: 2000,
        origin: "bottom"
    });
    sr.reveal('#par div .customer', {
        duration: 2000,
        origin: "bottom",
        delay: 500,
    });
    sr.reveal('.info-right', {
        duration: 2000,
        origin: "right",
        distance: "300px",
    });
    sr.reveal('.info-left', {
        duration: 2000,
        origin: "left",
        distance: "300px",
        viewFactor: 0.2
    });
    sr.reveal('form', {
        duration: 2000,
        origin: "bottom",
        distance: "300px",
        viewFactor: 0.4
    });
    sr.reveal('.tool', {
        duration: 2000,
        origin: "bottom",
        distance: "300px",
        viewFactor: 0.4,
        delay: 2000
    });
    sr.reveal('.title', {
        duration: 2000,
        origin: "bottom",
        distance: "300px",
        delay: 2000
    });
    sr.reveal('.bb', {
        duration: 2000,
        origin: "top",
        distance: "300px",
        delay: 2000
    });


    $(function () {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

});


let wrapper = document.getElementById('wrapper');
let topLayer = wrapper.querySelector('.top');
let handle = wrapper.querySelector('.handle');
let skew = 0;
let delta = 0;

if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
}

wrapper.addEventListener('mousemove', function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + skew + delta + 'px';
});


// if (self.isMobile() && self.config.mobile) elem.config.wait = 0;

// transition = '-webkit-transition: -webkit-transform ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + ', opacity ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + '; ' +
//     'transition: transform ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + ', opacity ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + '; ' +
//     '-webkit-perspective: 1000;' +
//     '-webkit-backface-visibility: hidden;'

// reset = '-webkit-transition: -webkit-transform ' + elem.config.over + ' ' + elem.config.easing + ' 0s, opacity ' + elem.config.over + ' ' + elem.config.easing + ' 0s; ' +
//     'transition: transform ' + elem.config.over + ' ' + elem.config.easing + ' 0s, opacity ' + elem.config.over + ' ' + elem.config.easing + ' 0s; ' +
//     '-webkit-perspective: 1000; ' +
//     '-webkit-backface-visibility: hidden;'