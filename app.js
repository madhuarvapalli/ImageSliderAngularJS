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
  });
