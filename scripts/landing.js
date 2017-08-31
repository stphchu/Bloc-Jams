var animatePoints = function() {
  var points = document.getElementsByClassName('point');

  var revealPoint = function (pointsIndex){
      pointsIndex[i].style.opacity = 1;
      pointsIndex[i].style.transform = "scaleX(1) translateY(0)";
      pointsIndex[i].style.msTransform = "scaleX(1) translateY(0)";
      pointsIndex[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

for (var i = 0; i < points.length; i++){
  revealPoint(i);
};
};
