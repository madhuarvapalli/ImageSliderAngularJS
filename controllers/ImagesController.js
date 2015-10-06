imageSlider.controller('ImagesCtrl', function ImagesCtrl($scope, ImagesFactory) {
  $scope.slides = ImagesFactory.slides;
  $scope.ImagesFactory = ImagesFactory;

  $scope.currentIndex = 0;

  $scope.setCurrentIndex = function(index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentIndex = function(index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function() {
    $scope.currentIndex = ($scope.currentIndex < $scope.slide.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function() {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slide.length - 1;
  };
})
.animation('.slide-animation', function() {
  return {
    addClass: function(element, className, done) {
      if (className == 'ng-hide') {
        TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
      } else {
        done();
      },
      removeClass: function(element, className, done) {
        if (className == 'ng-hide') {
          element.removeClass('ng-hide');

          TweenMax.set(element, { left: element.parent().width() });
          TweenMax.to(element, 0.5, {left: 0, onComplete: done });
        } else {
            done();
        }
      }
    }
  };
});
