myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {

  console.log('NavController loaded');

  $scope.loadTechnology = function() {
    window.open('https://claudiacalderas.wordpress.com/?type=individual');
  }

  $scope.loadHome = function() {
    console.log('name clicked');
    $location.url('/home');
  }

  // Displays menu options
  $scope.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

}]);
