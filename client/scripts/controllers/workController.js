myApp.controller('WorkController', ['$scope', '$location', '$interval', '$window', function($scope, $location, $interval, $window) {

  console.log('WorkController loaded');

  $scope.portfolioItems = [
    {title: 'Otomi',
    image_url: 'views/images/ShopPhoto1.jpg'},
    {title: 'Pecora Madrid',
    image_url: 'views/images/ShopPhoto2.jpg'}
  ];

  $scope.goToSpecificItem = function(item) {
    console.log('in goToSpecificItem');
    $scope.specificItem = item;
    $location.url('/portfolio');


  }


}]);
