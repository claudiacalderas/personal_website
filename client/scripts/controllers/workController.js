myApp.controller('WorkController', ['$scope', '$location', '$interval', '$window', 'DataService', function($scope, $location, $interval, $window, DataService) {

  console.log('WorkController loaded');

  // DataService.newArtPortfolioItem();

  // Calls Factory function that gets registries information for current user from the database
  DataService.getArtPortfolioItems().then(function(data){
    console.log('in');
    if (data.data != "") {
      $scope.portfolioItems = DataService.artPortfolioObject.allItems;
    }
  })
  .catch(function(response){
      console.log(response.status);
  });

  $scope.goToSpecificItem = function(item) {
    console.log('in goToSpecificItem');
    DataService.currentItem = item;
    console.log("item:", $scope.specificItem);
    $location.url('/portfolio');
  }

}]);
