myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {

  console.log('NavController loaded');

  $scope.loadTechnology = function() {
    window.open('https://claudiacalderas.wordpress.com/?type=individual');
  }

}]);
