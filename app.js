var imageSlider = angular.module('imageSlider', ['ngAnimate'])
  .controller('MainCtrl', function ($scope) {
    $scope.slides = [
      {image:'' description: ''},
      {image:'' description: ''},
      {image:'' description: ''},
      {image:'' description: ''},
      {image:'' description: ''},
      {image:'' description: ''}
    ];

    $scope.currentIndex = 0;

    $scope.setCurrentIndex = function (index) {
      $scope.currentIndex = index;
    };

    $scope.isCurrentIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function (index) {
      $scope.currentIndex = ($scope.currentIndex < $scope.slide.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slide.length - 1;
    };
  });
