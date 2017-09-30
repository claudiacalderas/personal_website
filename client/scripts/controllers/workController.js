myApp.controller('WorkController', ['$scope', 'DataService', '$location',
                function($scope, DataService, $location) {

  // DataService.newArtPortfolioItem();

  // Calls Factory function that gets registries information for current user from the database
  DataService.getArtPortfolioItems().then(function(data){
    if (data.data != "") {
      $scope.portfolioItems = DataService.artPortfolioObject.allItems;
    }
  })
  .catch(function(response){
      console.log(response.status);
  });

  $scope.goToSpecificItem = function(item) {
    DataService.currentItem = item;
    $location.url('/portfolio');
  };

}]);
