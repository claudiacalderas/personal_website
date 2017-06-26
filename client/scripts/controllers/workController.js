myApp.controller('WorkController', ['$scope', '$location', '$interval', '$window', 'DataService', function($scope, $location, $interval, $window, DataService) {

  console.log('WorkController loaded');

  $scope.specificItem = DataService.currentItem;

  $scope.portfolioItems = [
    {title: 'Otomi',
    image_url: 'views/images/ShopPhoto1.jpg'},
    {title: 'Pecora Madrid',
    image_url: 'views/images/ShopPhoto2.jpg'}
  ];

  $scope.goToSpecificItem = function(item) {
    console.log('in goToSpecificItem');
    DataService.currentItem = item;
    // $scope.specificItem = item;
    console.log("item:", $scope.specificItem);
    $location.url('/portfolio');
    console.log('here');
  }


}]);
