myApp.controller('PortfolioController', ['$scope', '$location', '$interval', '$window', 'DataService', function($scope, $location, $interval, $window, DataService) {

  console.log('PortfolioController loaded');

  $scope.specificItem = DataService.currentItem;

}]);
