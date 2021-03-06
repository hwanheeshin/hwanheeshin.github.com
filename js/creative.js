$(document).ready(function () {
	  $("#inc-ariby").load("project/Ariby.html");
	  $("#inc-summoner").load("project/SummonerVR.html");
	  $("#inc-aws").load("project/AWS.html");
	  $("#inc-gotohome").load("project/gotohome.html");
	  $("#inc-bicycle").load("project/Bike.html");
	  $("#inc-ncp1").load("project/ncp-compute.html");
	  $("#inc-ncp2").load("project/ncp-storage.html");
	  $("#inc-ncp3").load("project/ncp-network.html");
	  $("#inc-disaster").load("project/Disaster.html");
	  $("#inc-meetingplace").load("project/meetingplace.html");
	  $("#inc-snackpop").load("project/SnackPop.html");
	  $("#inc-allmidifier").load("project/AllMidifier.html");
	  $("#inc-gaint").load("project/Gaint.html");
	  $("#inc-elevator").load("project/elevator.html");
	  $("#inc-inversion").load("project/inversion.html");
	  $("#inc-farmcar").load("project/FarmCar.html");
});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Modal
  $('a[href]').click(function (event) {
    var mlink = this.toString().substr(this.toString().indexOf('#'));
    if (mlink.search("#pro") != -1) {
      event.preventDefault();
      $(mlink).modal({
        fadeDuration: 250
      });
    }
  });
})(jQuery); // End of use strict

// Filter
function FilterCtg(evt, ctgname) {
  var i, x, tablinks;
  x = document.getElementsByClassName("ctg-all");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" filter-active", "");
  }
  x = document.getElementsByClassName(ctgname);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
  evt.currentTarget.className += " filter-active";
}