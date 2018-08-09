$(document).ready(function () {

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
        delay: 2000,
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
        viewFactor: 0.4,
        delay: 2000
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

// if (self.isMobile() && self.config.mobile) elem.config.wait = 0;

// transition = '-webkit-transition: -webkit-transform ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + ', opacity ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + '; ' +
//     'transition: transform ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + ', opacity ' + elem.config.over + ' ' + elem.config.easing + ' ' + elem.config.wait + '; ' +
//     '-webkit-perspective: 1000;' +
//     '-webkit-backface-visibility: hidden;'

// reset = '-webkit-transition: -webkit-transform ' + elem.config.over + ' ' + elem.config.easing + ' 0s, opacity ' + elem.config.over + ' ' + elem.config.easing + ' 0s; ' +
//     'transition: transform ' + elem.config.over + ' ' + elem.config.easing + ' 0s, opacity ' + elem.config.over + ' ' + elem.config.easing + ' 0s; ' +
//     '-webkit-perspective: 1000; ' +
//     '-webkit-backface-visibility: hidden;'