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
  });
