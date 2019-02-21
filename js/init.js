$(document).ready(function () {

  AOS.init();

  $('#hi').typeIt({
    speed: 50,
    autoStart: false
  });

  $('#nav-name').typeIt({
    speed: 50,
    autoStart: false
  });

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel').carousel();

});