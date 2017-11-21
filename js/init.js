// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();
//     $('.parallax').parallax();
//     $('.carousel').carousel();
//     // Materialize.scrollFire(options);
//   }); // end of document ready
// })(jQuery); // end of jQuery name space


// var options = [
//     {
//     selector: '#taco', offset: 290, callback: function (el1) {
//       Materialize.fadeInImage($(el1));
//       }
//     },
//     {
//     selector: '#lebowski', offset: 300, callback: function (el2) {
//       Materialize.fadeInImage($(el2));
//       }
//     },
//     {
//     selector: '#burger', offset: 310, callback: function (el3) {
//       Materialize.fadeInImage($(el3));
//     }
//   }
// ];
// Materialize.scrollFire(options);


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.card').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 500);

      }

    });

  });

  $('#hi').typeIt({
    // strings: ["|| I'm a full stack developer", "and UI fanatic ||"],
    speed: 50,
    // breakLines: false,
    autoStart: false
  });

  $('#nav-name').typeIt({
    // strings: ["|| I'm a full stack developer", "and UI fanatic ||"],
    speed: 50,
    // breakLines: false,
    autoStart: false
  });

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel').carousel();

});