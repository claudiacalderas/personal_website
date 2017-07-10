myApp.controller('WorkController', ['$scope', '$location', '$interval', '$window', 'DataService', function($scope, $location, $interval, $window, DataService) {

  console.log('WorkController loaded');

  // DataService.newArtPortfolioItem();
  $scope.portfolioItems = DataService.artPortfolioObject.allItems;

  $scope.goToSpecificItem = function(item) {
    console.log('in goToSpecificItem');
    DataService.currentItem = item;
    console.log("item:", $scope.specificItem);
    $location.url('/portfolio');
  }

}]);
