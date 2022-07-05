// nav section 


$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});


// Define selector for selecting 
// anchor links with the hash 
let anchorSelector = 'a[href^="#"]';

$(anchorSelector).on('click', function(e) {

    // Prevent scrolling if the 
    // hash value is blank 
    e.preventDefault();

    // Get the destination to scroll to 
    // using the hash property 
    let destination = $(this.hash);

    // Get the postion of the destination 
    // using the coordinates returned by 
    // offset() method 
    let scrollPosition = destination.offset().top;

    // Specify animation duration 
    let animationDuration = 500;

    // Animate the html/body with  
    // the scrollTop() method 
    $('html, body').animate({
        scrollTop: scrollPosition
    }, animationDuration);
});
// navbar section end

// ====================================================================================================

// brand section start 


$(document).ready(function() {

    if ($('.brands_slider').length) {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            dots: true,
            autoWidth: true,
        });

    }


});




// brand section end




// ====================================================================================================

// outer section start 


function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// outer section end 

// ====================================================================================================