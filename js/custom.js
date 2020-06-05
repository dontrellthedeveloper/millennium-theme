/* ==============================================
|   |   |   |    Services
=============================================== */
$(function () {

    // animate on scroll
    new WOW().init();
});


/* ==============================================
|   |   |   |    Work
=============================================== */
$(function () {

   $("#work").magnificPopup({
       delegate: 'a',
       type: 'image',
       gallery: {
           enabled: true
       }

   });
});



/* ==============================================
|   |   |   |    Team
=============================================== */

$(function () {

   $(".team-members").owlCarousel({
       items: 3,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
       responsive: {
           0: {
               items: 1
           },
           480: {
               items: 2
           },
           768: {
               items: 3
           }
       }

   });
});

/* ==============================================
|   |   |   |    Customer
=============================================== */

$(function () {

    $(".customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });
});


/* ==============================================
|   |   |   |    Stats
=============================================== */

$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/* ==============================================
|   |   |   |    Clients
=============================================== */
$(function () {

    $(".clients-list").owlCarousel({
       items: 6,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
        responsive: {
           0: {
                items: 1
           },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
               items: 6
            }
        }
    });

});

/* ================================
|   |   |   Google Map
================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '7900 Santa Monica Blvd, CA, West Hollywood, 90046, USA';
    var myLatlng = {lat: 34.090540, lng: -118.361750};

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });


});



/* ================================
|   |   |   Navigation
================================ */

$(function () {

   $(window).scroll(function () {

       if($(this).scrollTop() < 50 ) {
           $("nav").removeClass("vesco-top-nav");
           $("#back-to-top").fadeOut();
       } else {
           $("nav").addClass("vesco-top-nav");
           $("#back-to-top").fadeIn();
       }
   });

});

// Smooth Scrolling

$(function () {

    $("a.smooth-scroll").click(function(event) {

       event.preventDefault();

       var section = $(this).attr("href");

       $("html, body").animate({
          scrollTop: $(section).offset().top - 64
       }, 1250, "easeInOutExpo");
    });
});

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggler").click();
    });
});