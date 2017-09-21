// #5
var animatePoints = function() {
  var revealPoint = function() {
// #7
   $(this).css({
   opacity: 1,
   transform: 'scaleX(1) translateY(0)'
   });
  };
// #6
   $.each($('.point'), revealPoint);

/*
for (var i = 0; i < points.length; i++){
  revealPoint(i);
};
*/

forEach(pointsArray, revealPoint);
};

$(window).load(function() {
// Automatically animate the points on a tall screen where scrolling can't trigger the animation
// #1
  if ($(window).height() > 950) {
    animatePoints();
  }
// #2
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
// #3
  $(window).scroll(function(event) {
// #4
  if ($(window).scrollTop() >= scrollDistance) {
    animatePoints();
  }
  });
});
