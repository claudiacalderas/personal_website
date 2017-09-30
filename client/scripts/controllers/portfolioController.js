myApp.controller('PortfolioController', ['$scope', 'DataService',
                function($scope, DataService) {

  $scope.specificItem = DataService.currentItem;

}]);
